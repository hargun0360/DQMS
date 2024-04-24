import React, {useState} from 'react';
import {Alert, Image, KeyboardAvoidingView, NativeModules, Platform, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import illus from '../../assets/token.png';
import {firebaseConfig} from "./Firebase";
import {getApp, getApps, initializeApp} from "@firebase/app";
import auth from "@react-native-firebase/auth";
import {router} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {setConfirm} from "../store/otpSlice/otp_reducer";


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const Login = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const {RecaptchaModule} = NativeModules;
    const dispatch = useDispatch();
    const confirm = useSelector((state) => state.otpSlice.confirm)

    async function requestVerificationCode(phoneNumber) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            dispatch(setConfirm(confirmation));
            Alert.alert("Verification code has been sent to your phone.");
            router.push({
                pathname: `/otp`,
            });
        } catch (error) {
            console.error("Verification code error:", error);
            Alert.alert(`Failed to send verification code: ${error.message}`);
        }
    }

    const handleLogin = (token) => {
        if (token) {
            if (name !== '' && phoneNumber !== '') {
                const phoneRegex = /^\+91\d{10}$/
                if (phoneRegex.test(phoneNumber)) {
                    requestVerificationCode(phoneNumber);
                } else {
                    setPhoneNumber('+91' + phoneNumber);
                    const phone = '+91' + phoneNumber;
                    requestVerificationCode(phone);
                }
            }
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <View style={styles.illustrationContainer}>
                <Image source={illus} style={styles.illustration}/>
            </View>
            <TextInput
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                mode="outlined"
                style={styles.input}
            />
            <TextInput
                label="Phone Number"
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                mode="outlined"
                style={styles.input}
                keyboardType="phone-pad"
            />
            <Button
                mode="contained"
                onPress={async () => {
                    try {
                        const token = await RecaptchaModule.createCalendarEvent()
                        handleLogin(token);
                    } catch (e) {
                        console.log(e)
                    }
                }}
                style={styles.button}
            >
                Submit
            </Button>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    illustrationContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    illustration: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    },
    captcha: {
        marginTop: 10,
        alignSelf: 'center',
    },
});
