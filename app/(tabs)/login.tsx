import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from  "react-native";
import { AuthentificationService} from './apiRequests';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        const response= await AuthentificationService.loginUser(email, password)
    }
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
        texInput:{
            backgroundColor: '#FEFEE2',
            paddingHorizontal: 15,
            paddingVertical: 7,
            borderRadius: 10,
            elevation: 5,
        }
      });
return (
    <View>
        <Text>Email :</Text>
        <TextInput 
        style = {styles.texInput}
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