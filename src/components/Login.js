import React, {useRef, useState} from 'react';
import {Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import illus from '../../assets/token.png';
import {firebaseConfig} from "./Firebase";
import {getApp, getApps, initializeApp} from "@firebase/app";
import {NativeModules} from 'react-native';


app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const Login = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const {RecaptchaModule} = NativeModules;

    // const [captchaValidated, setCaptchaValidated] = useState(false);
    // const recaptchaVerifier = useRef(null);

    // const onVerifyCaptcha = (token) => {a
    //     setCaptchaValidated(true);
    // };

    // async function requestVerificationCode() {
    //     try {
    //         const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //         const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
    //         setCaptchaValidated(false);
    //         Alert.alert("Verification code has been sent to your phone.");
    //     } catch (error) {
    //         console.error("Verification code error:", error);
    //         Alert.alert(`Failed to send verification code: ${error.message}`);
    //     }
    // }

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
                onPress={()=> {
                    RecaptchaModule.createCalendarEvent('testName', 'testLocation');
                    // RecaptchaModule.createCalendarEvent('testName', 'testLocation');
                }}
                style={styles.button}
            >
                Verify
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
