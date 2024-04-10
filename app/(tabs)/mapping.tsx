import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



let google : any = require('react-native-google-maps')

const GOOGLE_MAPS_API_KEY = 'AIzaSyBoA4HNrFcxyJOem6To_xmbGmDjOQpn3iM'; // Remplacez par votre clé API

const Maps = () => {
  const [region, setRegion] = useState({
    latitude: 44.833328, // Latitude de Bordeaux
    longitude: -0.56667, // Longitude de Bordeaux
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Chargement de la carte après le rendu du composant
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: region.latitude, lng: region.longitude },
      zoom: 12,
    });

    // Ajout d'un marqueur
    const marker = new google.maps.Marker({
      position: { lat: region.latitude, lng: region.longitude },
      map,
      title: 'Bordeaux',
    });

    // Mise à jour de la région de la carte
    setRegion({ ...region, ...map.getBounds().toJSON() });

    return () => {
      // Nettoyage des ressources
      marker.setMap(null);
      map.setDiv(null);
    };
  }, [region]);

  return (
    <View style={styles.container}>
      <MapView
        provider={google.maps.Map} // Fournisseur Google Maps
        style={styles.map}
        region={region}
        showsUserLocation={true}
      >
        <Marker
          coordinate={region}
          title="Bordeaux"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Maps;