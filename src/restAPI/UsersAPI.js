const USERS_URL = 'https://retoolapi.dev/v00FjN/users';

class UsersAPI {

    async get () {
        try{
            const resp = await fetch(USERS_URL);
            const data = await resp.json();
            return data;
        }
        catch{
            console.log('Failed GET call');
        }
    };

    async getSingleUser(id) {
        try{
            const resp = await fetch(`${USERS_URL}/${id}`);
            const data = await resp.json();
            return data;
        }
        catch{
            console.log('Failed GET call');
        }
    };


    async delete (id) {
        try{
            const resp = await fetch(`${USERS_URL}/${id}`, {
                method: 'DELETE'
            });
            return resp;
        }
        catch{
            console.log('Failed DELETE call')
        }
    };

    async put (id,object) {
        try{
            const resp = await fetch(`${USERS_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object)
            });
            return resp;
        }
        catch{
            console.log('Failed PUT call')
        }
    };

    async post (object) {
        try{
            const resp = await fetch(USERS_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object)
            });
            return resp;
        }
        catch{
            console.log('Failed POST call')
        }
    }
}

export const usersAPI = new UsersAPI();