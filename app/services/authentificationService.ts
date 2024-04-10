import {Alert} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  React, {useEffect, useState} from "react";
import { Stack } from 'expo-router';


export class AuthentificationService {

    static async loginUser(email: string, password : string) {
        try {
            const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/login',
            { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})})

            if (response.ok) {

                
                

                //navigation.navigate('Profile');
            }
        }
        catch(e){
            console.log(e)
        }
    
} 

static async registerUser(email:string, name:string, password:string ,profile_photo_path:string) {
    try {
        const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/register',{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, name, profile_photo_path})})
    } catch (e) {
        console.log(e);
    }
}
}
