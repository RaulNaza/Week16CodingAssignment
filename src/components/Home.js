import { useNavigate } from "react-router-dom";
import { usersAPI } from "../restAPI/UsersAPI";
import { useState, useEffect } from "react";

function Home() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    useEffect(
        () => {
            getUser();
        }, []
    );

    const getUser = async () => {
        try {
            const resp = await usersAPI.get();
            setUsers(resp);
        }
        catch {
            console.log('Failed getUser func.');
        }
    };

    const validateUser = () => {
        const validUser = users.find(
            (user) => (
                user.userName === inputUsername && user.password === inputPassword
            )
        );

        validUser?
        navigate('/ContactList', {state: validUser}):
        navigate('/NoUserFound')

    };

    const createNewUser = () => {
        navigate('/NewUser', {state: users})
    };

    return (
        <div className="mt-5">
            <h1>Welcome!</h1>
            <form className="log-in-form bg-secondary-subtle">
                <div className="form-div">
                    <label className="form-label">Username:</label>
                    <input className="form-control" onChange={(event) => setInputUsername(event.target.value)}></input><br></br>
                </div>
                <div className="form-div mt-5">
                    <label className="form-label">Password:</label>
                    <input className="form-control" onChange={(event) => setInputPassword(event.target.value)}></input><br></br>
                </div>
                <button type="button" className="form-button btn btn-primary" onClick={() => validateUser()}>Log In</button>
                <button type="button" className="form-button btn btn-primary" style={{ marginLeft: '5px' }} onClick={() => createNewUser()}>Create User</button>
            </form>
        </div>
    )
}

export default Home;