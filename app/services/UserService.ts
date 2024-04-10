export class UserService {

    public static async getUsers(id:number) {
            try {
            const response = await fetch('https://22c2-83-142-150-170.ngrok-free.app/api/users',{ 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})})
            return response
        }
        catch(e){
            console.log(e)
        };
    }
}