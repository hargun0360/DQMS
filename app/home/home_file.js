import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import Card from "../../src/Components/Card";
import { router } from "expo-router";

const Home = () => {
  const handleCardPress = (cardId) => {
    router.push(`/home/${cardId + 1}`, { id: cardId+1 });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {new Array(10).fill().map((_, index) => {
        return (
          <View style={{ paddingBottom: 5, paddingTop: 5, padding: 12 }}>
            <Card
              key={index.toString()}
              onPress={() => handleCardPress(index)}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
