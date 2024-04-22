import React, { useState } from "react";
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

const Card = ({ onPress }) => {
  const [favourite, setFavorite] = useState(false);
  const toggleFavorite = () => setFavorite(!favourite);
  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={icon} style={styles.imageAvatar} />
        </View>
      </Pressable>
      <View style={styles.infoContainer}>
        <Pressable onPress={onPress}>
          <Text style={styles.storeName}>TAD Bandar Baru Bangi</Text>
          <Text style={styles.storeAddress}>Bandar Baru Bangi, Selangor</Text>
        </Pressable>
        <TouchableOpacity style={styles.heartContainer} onPress={toggleFavorite}>
        {favourite ? (
          <AntDesign name="heart" size={18} color="red" />
        ) : (
          <AntDesign name="hearto" size={18} color="black" />
        )}
      </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>0</Text>
            <Text style={styles.detailLabel}>Customers</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>0</Text>
            <Text style={styles.detailLabel}>Waiting Time</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>10.3 km</Text>
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
    position: 'absolute',
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
