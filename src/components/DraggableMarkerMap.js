import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DraggableMarkerMap = ({ initialLatitude, initialLongitude }) => {
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: initialLatitude,
    longitude: initialLongitude,
  });

  const onMarkerDragEnd = (e) => {
    setMarkerCoordinates(e.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={markerCoordinates}
          onDragEnd={onMarkerDragEnd}
          draggable
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DraggableMarkerMap;
