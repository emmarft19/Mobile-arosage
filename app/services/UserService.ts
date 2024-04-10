export class UserService {

    public static async getUsers(id:number) {
            try {
            const response = await fetch('https://4abb-2a02-8428-ed77-e101-7113-3201-9830-4fca.ngrok-free.app/api/users',{ 
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