import { usersAPI } from "../restAPI/UsersAPI"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

function NewUser() {
    const users = useLocation().state;

    const navigate = useNavigate();

    const [userNameExists, setUserNameExists] = useState(false);
    const [blankUser, setBlankUser] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [preferredName, setPreferredName] = useState(username);

    const addUser = async (event) => {
        event.preventDefault();

        if (username.match(/^\s*$/) || password.match(/^\s*$/)) {
            setBlankUser(true);
        } else {
            if (blankUser !== false) setBlankUser(false);
            try {
                const object = {

                    userName: username,
                    password: password,
                    preferredName: preferredName,
                    contactList: []
                };

                await usersAPI.post(object);
                navigate('/', { replace: true });
            }
            catch {
                console.log('Failed addUser func.')
            }
        }

    };

    const existingUserName = (value) => {
        setBlankUser(false);
        
        for (let i = 0; i < users.length; i++) {
            const {userName} = users[i];
            if (userName === value) {
                setUserNameExists(true);
                break
            } else {
                setUsername(value);
                setUserNameExists(false);
            }
        }

    };

    const handlePassword = (value) => {
        setBlankUser(false);
        setPassword(value);
    };

    return (
        <div className="mt-5">
            <h1>New User</h1>
            <form className="new-user-form">
                <div className="form-div">
                    <label className="form-label">Username:</label>
                    {userNameExists ?
                        <span className="text-danger">
                            <i className="bi bi-exclamation-octagon-fill" />
                            {" "}Username already exists
                        </span> : username.length === 0 ?
                            <span>
                            </span> :
                            <span className="text-success">
                                <i className="bi bi-check-circle" />
                                {" "}Has not been used!
                            </span>}
                    <input className="form-control" id="username-input" onChange={(event) => existingUserName(event.target.value)} ></input><br></br>
                </div>
                <div className="form-div">
                    <label className="form-label">Password: </label>
                    <input className="form-control" id="password-input" onChange={(event) => handlePassword(event.target.value)}></input><br></br>
                </div>
                <div className="form-div">
                    <label className="form-label">Preferred Name:</label>
                    <input className="form-control" onChange={(event) => setPreferredName(event.target.value)}></input><br></br>
                </div>
                <>
                    {blankUser ?
                        <p className="text-danger">
                            No Username or Password Provided
                        </p> :
                        <></>
                    }
                    <button onClick={(event) => addUser(event)} className="form-button btn btn-primary me-2">Create</button>
                </>
            </form>
        </div>
    )
}

export default NewUser;