import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    ScrollView,
    Image,
  } from 'react-native';
  import React from 'react';
  import { useLocalSearchParams } from 'expo-router';
  import shop from '../../assets/x.jpg';
  import DraggableMarkerMap from '../../src/Components/DraggableMarkerMap';
  
  const StoreInfo = () => {
    const { id } = useLocalSearchParams();
  
    return (
      <ScrollView style={styles.container}>
        <Image source={shop} style={styles.storeImage} />
        <View style={styles.content}>
          <Text style={styles.headerText}>Store Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum...
          </Text>
  
          <View style={styles.mapContainer}>
            <DraggableMarkerMap
              initialLatitude={37.78825}
              initialLongitude={-122.4324}
            />
          </View>
  
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoHeader}>Distance</Text>
              <Text style={styles.infoContent}>5 km</Text>
            </View>
  
            <View style={styles.infoBox}>
              <Text style={styles.infoHeader}>Customers</Text>
              <Text style={styles.infoContent}>20 people</Text>
            </View>
  
            <View style={styles.infoBox}>
              <Text style={styles.infoHeader}>Counters</Text>
              <Text style={styles.infoContent}>3 active</Text>
            </View>
          </View>
  
          <Text style={styles.averageTime}>Average Wait Time: 15 min</Text>
  
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Join Queue</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  };
  
  export default StoreInfo;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    storeImage: {
      width: '100%',
      height: 200, // Adjust the height as needed
      resizeMode: 'cover',
    },
    content: {
      padding: 16,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    descriptionText: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24,
      marginBottom: 16,
    },
    mapContainer: {
      height: 200,
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 16,
    },
    infoContainer: {
      marginBottom: 16,
    },
    infoBox: {
      marginBottom: 8,
    },
    infoHeader: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    infoContent: {
      fontSize: 16,
      color: '#666',
    },
    averageTime: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 12,
      borderRadius: 6,
      alignItems: 'center',
      marginBottom: 16,
    },
    buttonText: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
    },
  });
  