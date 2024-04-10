import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Maps= () => {
  const initialRegion = {
    latitude: 44.833328, 
    longitude: -0.56667, 
    latitudeDelta: 0.09, 
    longitudeDelta: 0.09, 
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={initialRegion}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Maps;

