import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AuthentificationService } from '../../components/AuthentificationService';
import { PlantService } from '../../components/plantService';

const MyPlantsPage: React.FC = () => {
  const [plants, setPlants] = useState([]);
  const [user, setUser] = useState(AuthentificationService.getCurrentUser());

  useEffect(() => {
    const fetchPlants = async () => {
      if (user) {
        const plants = await PlantService.getPlantsByUserId(user.id);
        setPlants(plants);
      }
    };

    fetchPlants();
  }, [user]);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>

      </View>
    );
  };

  return (
    <View>
      {user && (
        <FlatList
          data={plants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        
      )}
      {!user && <Text>Veuillez vous connecter pour voir vos plantes.</Text>}
    </View>
  );
};

export default MyPlantsPage;
