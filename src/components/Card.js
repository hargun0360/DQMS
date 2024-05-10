import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import icon from "../../assets/x.jpg";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment-duration-format";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;

  const degToRad = (deg) => (deg * Math.PI) / 180;

  const lat1Rad = degToRad(parseFloat(lat1));
  const lat2Rad = degToRad(parseFloat(lat2));
  const dLat = degToRad(parseFloat(lat2) - parseFloat(lat1));
  const dLon = degToRad(parseFloat(lon2) - parseFloat(lon1));

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm - (earthRadiusKm - c);
}

const Card = ({img ,  data, onPress }) => {
  const location = useSelector((store) => store.otpSlice.location);

  const customers = data.counters.reduce(
    (acc, counter) => acc + counter.customers.length,
    0
  );

  const waitingTime = Math.min(
    ...data.counters.map((counter) => counter.avgTimePerPerson)
  );

  const distance = calculateDistance(
    location.latitude,
    location.longitude,
    data.latitude,
    data.longitude
  );

  const [timer, setTimer] = useState(waitingTime * 60); // Convert minutes to seconds

  const [favourite, setFavorite] = useState(false);
  const toggleFavorite = () => setFavorite(!favourite);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTimer = moment
    .utc(moment.duration(timer, "seconds").asMilliseconds())
    .format("HH:mm:ss");

  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.imageAvatar} />
        </View>
      </Pressable>
      <View style={styles.infoContainer}>
        <Pressable onPress={onPress}>
          <Text style={styles.storeName}>{data.storeName}</Text>
          <Text style={styles.storeAddress}>{data.address}</Text>
        </Pressable>
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={toggleFavorite}
        >
          {favourite ? (
            <AntDesign name="heart" size={18} color="red" />
          ) : (
            <AntDesign name="hearto" size={18} color="black" />
          )}
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>{customers}</Text>
            <Text style={styles.detailLabel}>Customers</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>{formattedTimer}</Text>
            <Text style={styles.detailLabel}>Waiting Time</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>{`${distance.toFixed(2)}`} km</Text>
            <Text style={styles.detailLabel}>Distance</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    paddingRight: 10,
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  heartContainer: {
    position: "absolute",
    top: 0,
    right: 2,
    padding: 4,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  storeName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  storeAddress: {
    color: "gray",
    fontSize: 14,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailBox: {
    alignItems: "center",
  },
  detailText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  detailLabel: {
    color: "gray",
    fontSize: 14,
  },
});
