import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDKivh0KKa9VyWSiQRdPEhBxkz8NVkvdI8';

const Mapping: React.FC = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 48.856614,
    longitude: 2.3488,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    console.log('Chargement de la carte...');
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        showsUserLocation={true}
        provider={{ googleApiKey: GOOGLE_MAPS_API_KEY }}
        >
        <Marker
          coordinate={{
            latitude: 48.856614,
            longitude: 2.3488,
          }}
          title="Paris"
          description="La capitale de la France"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Mapping;
