import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert } from "react-native";
import { AuthentificationService, } from './apiRequests';

const RegisterPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async () => {

        const user = await AuthentificationService.loginUser(email, password)

    };

    return (
        <View>

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