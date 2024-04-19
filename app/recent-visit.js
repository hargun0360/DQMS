import { Alert, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import PaymentModal from "../src/Components/PaymentModal";

const recent = () => {
  console.log(process.env.EXPO_PUBLIC_SP_KEY);
  return (
    <SafeAreaView>
      <PaymentModal />
    </SafeAreaView>
  );
};

export default recent;

const styles = StyleSheet.create({});
