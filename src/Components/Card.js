import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import icon from '../../assets/x.jpg'

const Card = ({}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.imageAvatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.storeName}>TAD Bandar Baru Bangi</Text>
        <Text style={styles.storeAddress}>Bandar Baru Bangi, Selangor</Text>
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
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF', 
    borderRadius: 6,
    shadowColor: '#000',
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
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  storeAddress: {
    color: 'gray',
    fontSize: 14,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailBox: {
    alignItems: 'center',
  },
  detailText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailLabel: {
    color: 'gray', 
    fontSize: 14,
  },
});
