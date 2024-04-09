import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

//export default function TabOneScreen() {
  
type Data = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  path_image: string;
  user_created: number,
  date_begin: string,
  date_end: string,
  is_published: number,
  updated_at: string
  user_created_name : string;
};

export default function TabOneScreenApp () {


//const App = () => {
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
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            
            <Text>
              {item.name}, {item.description}, {item.created_at}, {item.path_image}, {item.updated_at}, {item.user_created_name}
              <button style={styles.button} onClick={()=>{window.location=`/post/${item.id}`}}>Contacter</button>
            </Text>
          )}
        />
      )}
    </View>
  );
};


  /*return (
    
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button : {
    flexDirection: 'row' , 
    fontSize: 15,
    color:'#fff',
    backgroundColor:"#4638ab",
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
});
