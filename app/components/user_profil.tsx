import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from  "react-native";
import { AuthentificationService } from '../services/authentificationService';
import { UserService } from '../services/UserService';

const UserProfil: React.FC = () => {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        const response= await UserService.getUsers(0)
        return  response;
    }
    
return (
    <View style={styles.container}>
        <Text>UserProfil</Text>
        

    </View>);
};

export default UserProfil;

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