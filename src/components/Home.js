import { useNavigate } from "react-router-dom";
import { usersAPI } from "../restAPI/Users";
import { useState, useEffect } from "react";



//this will be our Home page and it will be simple just showing your name and a link to open your contacts

function Home () {

    const [users,setUsers] = useState([]);
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    // const [userValidation, setUserValidation] = useState(false);

    const navigate = useNavigate();

    useEffect(
        () => {
            getUser()
        }, []
    );

    const getUser = async () => {
        try{
            const resp = await usersAPI.get();
            setUsers(resp);
        }
        catch{
            console.log('Failed getUser func.')
        }
    };

    const validateUser = (event) => {
        event.preventDefault();
        const validUser = users.find(
            (user) => (
                user.userName === inputUsername && user.password === inputPassword
            )
        )
        console.log(validUser);

        if(validUser){
            navigate('/ContactList');
        }else{
            navigate('/NoUserFound')
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/NewUser')
    }

    return (
        <div className="mt-5">
            <h1>Welcome!</h1>
            <p className="fst-italic">*You can use 'testuser' and 'testpassword' to login or create a new user*</p>
            <form className="log-in-form bg-secondary-subtle">
                <div className="form-div">
                    <label className="form-label">Username:</label>
                    <input className="form-control" onChange={(event) => setInputUsername(event.target.value)}></input><br></br>
                </div>
                <div className="form-div mt-5">
                    <label className="form-label">Password:</label>
                    <input className="form-control" onChange={(event) => setInputPassword(event.target.value)}></input><br></br>
                </div>
                <button className="form-button btn btn-primary" onClick={(event) => validateUser(event)}>Log In</button>
                <button className="form-button btn btn-primary" style={{marginLeft: '5px'}} onClick={(e) => handleClick(e)}>Create User</button>
            </form>
        </div>
    )
};

export default Home