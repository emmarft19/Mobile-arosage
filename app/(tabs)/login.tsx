import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert } from  "react-native";
import { loginUser} from './apiRequests';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        loginUser(email, password);
    };

return (
    <View>
        <Text>Email :</Text>
        <TextInput 
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Entrez votre adresse email" />

        <Text>Mot de passe :</Text>
        <TextInput 
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Entrez votre mot de passe" />

        <Button title="Se connecter" onPress={handleLogin} />

    </View>
    );
};

export default LoginPage;