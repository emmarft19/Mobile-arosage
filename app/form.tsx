import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function VotreFormulaireScreen() {
  const [photoUri, setPhotoUri] = useState(null);

  // Fonction pour afficher l'URI de la photo dans le formulaire
  const renderPhotoUri = () => {
    if (photoUri) {
      return <Image source={{ uri: photoUri }} style={styles.photo} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text>Votre formulaire</Text>
      {renderPhotoUri()}
      <TextInput
        placeholder="Nom"
        style={styles.input}
      />
      {/* Autres champs du formulaire */}
      <Button title="Valider" onPress={() => {/* Action de validation */}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  photo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
});
