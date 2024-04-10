import {Alert} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  React, {useEffect, useState} from "react";
import { Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


//let AsyncStorage : any = require('react-native-async-storage/async-storage');
export class AuthentificationService {

    static async loginUser(email: string, password : string) {
        try {
            const response : any = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/login',
            { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})})
            await AsyncStorage.setItem('authToken', response.data.token);
            await AsyncStorage.setItem('authToken', response.data.user.id);
        }
        catch(e){
            console.log(e)
        }
    
} 

static async registerUser(email:string, name:string, password:string ,profile_photo_path:string) {
    try {
        const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/register',
            { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, name, profile_photo_path})})
    } catch (e) {
        console.log(e);
    }
}

static async getCurrentUser(email:string, name:string, password:string ,profile_photo_path:string ,id: number) {
    try {
        const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/users',
            { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, name, profile_photo_path})})
    } catch (e) {
        console.log(e);
    }
}

static async checkLogin () {
    const id= {}
    try {const token = await AsyncStorage.getItem('authToken', id);
    if (token !== null){
        return token
    
    } else{return false}

    } catch (e) {
        console.log(e);
    }
}
}
