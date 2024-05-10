import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import axios from "axios";
import canteen from "../../../../assets/canteen.jpg";
import fashion from "../../../../assets/fashion.jpg";
import food from "../../../../assets/food.jpg";
import grocery from "../../../../assets/grocery.jpg";
import store from "../../../../assets/store.jpg";

const Home = () => {
  let auth;
  const url = process.env.EXPO_PUBLIC_BASE_URL;
  console.log(url);
  const getAuth = async () => {
    auth = await AsyncStorage.getItem("auth");
  };

  const [stores, setStores] = useState([]);
  const arr = [fashion, canteen, food, grocery, store];

  useEffect(() => {
    axios
      .get(url + "/store/allstores")
      .then((res) => {
        setStores(res.data);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  const state = useSelector((store) => store.otpSlice.location);
  console.log(state);

  React.useEffect(() => {
    getAuth();
    if (auth == "true") {
      router.replace("/authenticated_routes");
    }
  }, [auth]);

  const handleCardPress = (cardId) => {
    router.push(`/authenticated_routes/home/${cardId + 1}`, { id: cardId + 1 });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {stores.length > 0 &&
        stores?.map((item, index) => {
          return (
            <View
              key={item._id}
              style={{
                paddingBottom: 5,
                paddingTop: 5,
                padding: 12,
                marginBottom: 5,
              }}
            >
              <Card
                data={item}
                img={arr[(index)%arr.length]}
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
