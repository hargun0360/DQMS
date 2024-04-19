import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable  , Alert} from "react-native";
import icon from "../../assets/x.jpg";

const StandCard = () => {

  const handleAlert = () => {
    Alert.alert(
        'Hey Hargun!',
        'Are you sure you want to leave the Queue?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'YES', onPress: () => console.log('OK Pressed')},
        ],
      );
    }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Image source={icon} style={styles.imageAvatar} />
        <View style={styles.textContainer}>
          <Text style={styles.storeName}>TAD Bandar Baru Bangi</Text>
          <Text style={styles.storeAddress}>Bandar Baru Bangi, Selangor</Text>
          <Text style={styles.detailText}>Waiting Time: 0</Text>
          <Text style={styles.detailText}>Left Customers: 0</Text>
        </View>
      </View>
      <Pressable style={styles.leaveQueueButton} onPress={handleAlert}>
        <Text style={styles.leaveQueueButtonText}>Leave Queue</Text>
      </Pressable>
    </View>
  );
};

export default StandCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch", 
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10 
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8 
  },
  textContainer: {
    flexDirection: "column",
  },
  storeName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  storeAddress: {
    color: "gray",
    fontSize: 14,
  },
  detailText: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
  leaveQueueButton: {
    alignSelf: "flex-end",
    backgroundColor: "#FF6347",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 4 
  },
  leaveQueueButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
