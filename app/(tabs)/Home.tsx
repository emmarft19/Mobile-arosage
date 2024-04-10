import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

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

  const getData = async () => {
    try {
      const response = await fetch('https://4abb-2a02-8428-ed77-e101-7113-3201-9830-4fca.ngrok-free.app/api/plants');
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

  return (
    <View style={styles.container}>
      <EditScreenInfo path="app/(tabs)/Home.tsx" />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.label}>Name: </Text>
              <Text style={styles.value}>{item.name}</Text>
              
              <Text style={styles.label}>Description: </Text>
              <Text style={styles.value}>{item.description}</Text>
              
              <Text style={styles.label}>Created At: </Text>
              <Text style={styles.value}>{item.created_at}</Text>
              
              <Text style={styles.label}>Path Image: </Text>
              <Image source={{uri: item.path_image}} style={styles.image}/>
              
              <Text style={styles.label}>Updated At: </Text>
              <Text style={styles.value}>{item.updated_at}</Text>
              
              <Text style={styles.label}>User Created Name: </Text>
              <Text style={styles.value}>{item.user_created_name}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
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
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
