import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import illus from '../../assets/token.png'
import Firebase from '../Components/Firebase'
// import { Recaptcha } from '@haskkor/react-native-recaptchav3';

// const RECAPTCHA_KEY = 'YOUR_RECAPTCHA_KEY_HERE'; // You need to replace this with your actual site key

const Login = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [captchaValidated, setCaptchaValidated] = useState(false);

  const onVerifyCaptcha = (token) => {
    // Logic to handle the verification token
    setCaptchaValidated(true);
  };

  async function requestVerificationCode() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
      alert("Verification code has been sent to your phone.");
    } catch (error) {
      console.error("Verification code error:", error);
      alert(`Failed to send verification code: ${error.message}`);
    }
  }

  return (<>
    <Firebase />
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image source={illus} style={styles.illustration} />
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
      {/* <Recaptcha
        siteKey={RECAPTCHA_KEY}
        onVerify={onVerifyCaptcha}
        style={styles.captcha}
      /> */}
      <Button
        mode="contained"
        onPress={() => {
        requestVerificationCode
        }}
        disabled={!captchaValidated}
        style={styles.button}
      >
        Verify
      </Button>
    </KeyboardAvoidingView>
    </>);
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
  