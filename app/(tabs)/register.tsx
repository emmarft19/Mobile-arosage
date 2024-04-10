import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert } from "react-native";
import { AuthentificationService, } from '../../components/AuthentificationService';


const RegisterPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async () => {

        const user = await AuthentificationService.registerUser(email, password, name, profile_photo_path)

    };

    return (
        <View>

            <Text style= {styles.label}>
                Email : 
            </Text>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Entrez votre adresse email (exemple@exemple.com)" />
            <Text style= {styles.label}>Mot de passe: </Text>
            <TextInput 
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Entrez votre mot de passe" 
                secureTextEntry 
            />
            <Button title="Créer un compte" onPress={handleRegister} />
    </View>
    );
};

export default RegisterPage;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    label: {
      marginBottom: 10,
      fontSize: 16,
    },
    textInput: {
      marginBottom: 15,
      padding: 10,
      fontSize: 16,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
    button: {
      padding: 15,
      borderRadius: 5,
      backgroundColor: '#4CAF50', // Adjust background color as needed
      color: '#fff',
    },
  });