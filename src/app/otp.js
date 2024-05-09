import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import illus from '../../assets/token.png'
import firestore from "@react-native-firebase/firestore";
import {getApp, getApps, initializeApp} from "@firebase/app";
import {firebaseConfig} from "../components/Firebase";
import {useDispatch, useSelector} from "react-redux";
import {setConfirm} from "../store/otpSlice/otp_reducer";
import {router} from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const OTPScreen = () => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const confirm = useSelector((state) => state.otpSlice.confirm);
    const dispatch = useDispatch();
    let auth;
    const getAuth = async () => {
       auth = await AsyncStorage.getItem("auth");
    }
  
    React.useEffect(() => {
      getAuth();
      console.log("hello ", auth);
      if (auth == "true") {
        router.replace("/authenticated_routes");
      }
    }, [auth]);
    const {colors} = useTheme();

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) return prevTimer - 1;
                clearInterval(countdown);
                setCanResend(true);
                return 0;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [canResend]);

    async function confirmVerificationCode() {
        if (confirm === null) {
            alert("Verification code not yet requested.");
            return;
        }
        try {
            const userCredential = await confirm.confirm(otp);
            const userDocument = await firestore()
                .collection("users")
                .doc(userCredential.user.uid)
                .get();
            console.log("User document:", userDocument.data());
            dispatch(setConfirm(null));
            AsyncStorage.setItem("auth" , true);
            router.replace('/authenticated_routes');
            // send message to backend with secret key to check user is logged in or not
        } catch (error) {
            console.error("Error confirming verification code:", error);
            AsyncStorage.setItem("auth" , "false");
            alert(`Invalid verification code: ${error.message}`);
        }
    }

    const resendOTP = () => {
        console.log('Resending OTP');
        setCanResend(false);
        setTimer(30);
    };

    return (
        <View style={styles.container}>
            <Image source={illus} style={styles.image}/>
            <TextInput
                label="Enter OTP"
                value={otp}
                onChangeText={text => setOtp(text)}
                maxLength={6}
                style={styles.input}
                keyboardType="numeric"
                mode="outlined"
                theme={{colors: {primary: colors.primary}}}
            />
            <Button
                mode="contained"
                buttonColor="#4287f5"
                onPress={confirmVerificationCode}
                disabled={otp.length !== 6}
                style={styles.button}
            >
                Verify
            </Button>
            <Text style={styles.timerText}>
                {canResend ? (
                    <Button onPress={resendOTP}>Resend OTP</Button>
                ) : (
                    `Resend available in ${timer}s`
                )}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
    },
    timerText: {
        marginTop: 10,
        textAlign: 'center',
    },
});

export default OTPScreen;
