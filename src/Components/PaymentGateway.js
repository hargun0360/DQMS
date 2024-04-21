import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const PaymentGateway = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);

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

  async function confirmVerificationCode() {
    if (!confirm) {
      alert("Verification code not yet requested.");
      return;
    }
    try {
      const userCredential = await confirm.confirm(code);
      const userDocument = await firestore()
        .collection("users")
        .doc(userCredential.user.uid)
        .get();
      console.log("User document:", userDocument.data());
      setConfirm(null);
      alert("Phone verification successful and user is logged in.");
    } catch (error) {
      console.error("Error confirming verification code:", error);
      alert(`Invalid verification code: ${error.message}`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={requestVerificationCode}>
        <Text>Send Code</Text>
      </TouchableOpacity>
      {confirm && (
        <View>
          <TextInput
            style={styles.input}
            value={code}
            onChangeText={setCode}
            placeholder="Enter verification code"
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={confirmVerificationCode}
          >
            <Text>Verify Code</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PaymentGateway;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 12,
  },
});
