import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "./PaymentScreen";

const PaymentModal = () => {
    const publishableKey = process.env.EXPO_PUBLIC_SP_KEY;
  return (
    <StripeProvider
      publishableKey={publishableKey}
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
     <PaymentScreen />
    </StripeProvider>
  );
};

export default PaymentModal;

const styles = StyleSheet.create({});
