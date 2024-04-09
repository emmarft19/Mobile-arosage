import {Alert} from 'react-native';

export class AuthentificationService {

    static async loginUser(email: string, password : string) {
        try {
            const response = await fetch('https://4abb-2a02-8428-ed77-e101-7113-3201-9830-4fca.ngrok-free.app/api/login',{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})})
        }
        catch(e){
            console.log(e)
        }
    
} 

static async registerUser(email:string, name:string, password:string ,profile_photo_path:string) {
    try {
        const response = await fetch('https://4abb-2a02-8428-ed77-e101-7113-3201-9830-4fca.ngrok-free.app/api/register',{ 
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
