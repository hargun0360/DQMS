import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PaymentGateway from "../src/Components/PaymentGateway";

const recent = () => {
  return (
    <SafeAreaView>
      <PaymentGateway />
    </SafeAreaView>
  );
};

export default recent;

const styles = StyleSheet.create({});
