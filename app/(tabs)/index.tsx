import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const generateFakePlants = (count: number): { id: number; name: string; description: string; image: string; }[] => {
  const fakePlants: { id: number; name: string; description: string; image: string; }[] = [];
  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const name = `Plante ${id}`;
    const description = `Description de la plante ${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const image = `https://via.placeholder.com/150?text=Plante${id}`;

    fakePlants.push({ id, name, description, image });
  }
  return fakePlants;
};

export default function App() {
  // Générer des données de plantes fictives
  const [plants, setPlants] = useState(generateFakePlants(10));

  // Fonction de rendu des éléments de la liste
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Liste des plantes</Text>
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
