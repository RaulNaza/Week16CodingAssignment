const USERS_URL = 'https://retoolapi.dev/qv79BQ/users';

class usersAPI {

    async get () {
        try{
            const resp = await fetch(USERS_URL);
            const data = await resp.json();
            console.log('Sucessful GET!')
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
            console.log('Successful DELETE!')
            return resp;
        }
        catch{
            console.log('Dailed DELETE call')
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
            console.log('Successful PUT!');
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
            console.log('Successful POST!');
            return resp;
        }
        catch{
            console.log('Failed POST call')
        }
    }
}
export const usersAPI = new usersAPI();