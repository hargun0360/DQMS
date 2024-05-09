import Login from "../components/Login";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { addLocation } from "../store/otpSlice/location";

export default function index() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // console.log(location?.coords?.latitude, " ", location?.coords?.longitude);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (location?.coords) {
      let data = {
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
      };
      // console.log(data);

      dispatch(addLocation({ latitude: 40.7128, longitude: -74.006 }));
    }
  }, [location]);

  let auth;
  const getAuth = async () => {
    auth = await AsyncStorage.getItem("auth");
  }; 

  React.useEffect(() => {
    getAuth();
    // console.log("hello ", auth);
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
