import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Card from "../../../components/Card";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = () => {
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

  const handleCardPress = (cardId) => {
    router.push(`/authenticated_routes/home/${cardId + 1}`, { id: cardId + 1 });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {new Array(10).fill().map((_, index) => {
        return (
          <View
            key={index.toString()}
            style={{
              paddingBottom: 5,
              paddingTop: 5,
              padding: 12,
              marginBottom: 5,
            }}
          >
            <Card onPress={() => handleCardPress(index)} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
