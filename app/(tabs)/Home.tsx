import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; // Importer l'icône de la bibliothèque vectorielle AntDesign

type Data = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  path_image: string;
  user_created: number;
  date_begin: string;
  date_end: string;
  is_published: number;
  updated_at: string;
  user_created_name: string;
};

export default function TabOneScreenApp() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [searchResult, setSearchResult] = useState<Data[]>([]);
  const [searchError, setSearchError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/plants');
      const json = await response.json();
      setData(json.data);
      setSearchResult(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResult(filtered);
    setSearchError(filtered.length === 0);
  };

  return (
    <View style={styles.container}>
      {!showMap && (
        <>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Recherche..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
          {searchError && (
            <Text style={styles.errorText}>Aucun résultat trouvé</Text>
          )}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={searchResult}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <View key={item.id} style={styles.item}>
                  <Text style={styles.label}>Nom: </Text>
                  <Text>{item.name}</Text>
                  
                  <Text style={styles.label}>Description: </Text>
                  <Text>{item.description}</Text>
                  
                  <Text style={styles.label}>Créé à: </Text>
                  <Text>{item.created_at}</Text>
                  
                  <Text style={styles.label}>Image: </Text>
                  <Image source={{uri: item.path_image}} style={styles.image}/>
                  
                  <Text style={styles.label}>Publié à: </Text>
                  <Text>{item.updated_at}</Text>
                  
                  <Text style={styles.label}>Posté par: </Text>
                  <Text>{item.user_created_name}</Text>
                </View>
              )}
            />
          )}
          <TouchableOpacity style={styles.mapButton} onPress={() => setShowMap(true)}>
            <Text style={styles.mapButtonText}>Afficher la carte</Text>
          </TouchableOpacity>
        </>
      )}
      {showMap && (
        <>
          <TouchableOpacity style={styles.backButton} onPress={() => setShowMap(false)}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 44.833328,
              longitude: -0.56667,
              latitudeDelta: 0.09,
              longitudeDelta: 0.09,
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    width: '93%',
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  value: {
    marginBottom: 10,
    color: 'black',
  },
  image: {
    width: 380, 
    height: 380, 
    marginBottom: 10,
  },
  highlight: {
    color: 'pink', // Texte surligné en rose
  },
  map: {
    flex: 1,
  },
  mapButton: {
    backgroundColor: 'green', // Fond vert
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  mapButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 9999,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
