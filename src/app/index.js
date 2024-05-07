import Login from "../components/Login";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function index() {
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

  return (
    <>
      <Login />
    </>
  );
}
