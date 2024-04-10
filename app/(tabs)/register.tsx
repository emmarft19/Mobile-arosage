import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert } from "react-native";
import { AuthentificationService, } from '../services/authentificationService';

const RegisterPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async () => {

        const r = await AuthentificationService.registerUser(email, password, name, profile_photo_path)

    };

    return (
        <View>
            <Text>Votre nom: </Text>
            <TextInput 
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Entrez votre nom svp" 
                 
            />

            <Text>
                Email : 
            </Text>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Entrez votre adresse email (exemple@exemple.com)" />
            <Text>Mot de passe: </Text>
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