import { usersAPI } from "../restAPI/Users"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function NewUser () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const addUser = async (event) => {
        event.preventDefault();
        try{
            const object = {
                userName: username,
                password: password
            }
            await usersAPI.post(object);
            navigate('/', {replace: true});

            return console.log('Successfully added new user.')
        }
        catch{
            console.log('Failed addUser func.')
        }
    }
 
    return (
        <div>
            <h1>New User</h1>
            <form className="new-user-form">
                <div className="form-div">
                    <label className="form-label">Username:</label>
                    <input className="form-control" onChange={(event) => setUsername(event.target.value)}></input><br></br>
                </div>
                <div className="form-div">
                    <label className="form-label">Password:</label>
                    <input className="form-control" onChange={(event) => setPassword(event.target.value)}></input><br></br>
                </div>
                <button onClick={(event) => addUser(event)} className="form-button btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default NewUser