import { StyleSheet, TextInput, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import React, { useEffect, useState } from 'react';

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

  const getData = async () => {
    try {
      const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/plants');
      const json = await response.json();
      setData(json.data);
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
  };

  const renderHighlightedText = (text: string) => {
    if (!searchQuery) {
      return <Text>{text}</Text>;
    }
  
    const regex = new RegExp(`\\b${searchQuery}\\b`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, index) => (
      regex.test(part) ? <Text key={index} style={styles.highlight}>{part}</Text> : <Text key={index}>{part}</Text>
    ));
  };  

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.label}>Nom: </Text>
              {renderHighlightedText(item.name)}
              
              <Text style={styles.label}>Description: </Text>
              {renderHighlightedText(item.description)}
              
              <Text style={styles.label}>Créé à: </Text>
              {renderHighlightedText(item.created_at)}
              
              <Text style={styles.label}>Image: </Text>
              <Image source={{uri: item.path_image}} style={styles.image}/>
              
              <Text style={styles.label}>Publié à: </Text>
              {renderHighlightedText(item.updated_at)}
              
              <Text style={styles.label}>Posté par: </Text>
              {renderHighlightedText(item.user_created_name)}
            </View>
          )}
        />
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
    backgroundColor: 'pink',
  },
});
