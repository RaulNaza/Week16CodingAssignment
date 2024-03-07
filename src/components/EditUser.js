import { usersAPI } from "../restAPI/UsersAPI";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function EditUser() {
    const navigate = useNavigate();
    const location = useLocation();
    const userObj = location.state;

    const { id, userName, password, preferredName, contactList} = userObj;

    const [updatedUsername, setUpdatedUsername] = useState(userName);
    const [updatedPassword, setPassword] = useState(password);
    const [updatedPreferredName, setPreferredName] = useState(preferredName);

    const updateUser = async (event) => {
        event.preventDefault();
        try {
            const userInfo = {
                userName: updatedUsername,
                password: updatedPassword,
                preferredName: updatedPreferredName,
                contactList: contactList
            }

            await usersAPI.put(id, userInfo);
            
            navigate('/NewContactList', { replace: true, state:userObj});
        }
        catch {
            console.log('Failed updateUser func.');
        }
    };


    return (
        <div className="mt-5">
            <h1>Edit User</h1>
            <form className="new-user-form">
                <div className="form-div">
                    <label className="form-label">Current Username:</label>
                    <i>{userName}</i><br></br>
                    <label className="form-label">Edit Username:</label>
                    <input className="form-control" onChange={(event) => setUpdatedUsername(event.target.value)}></input><br></br>
                </div>
                <div className="form-div">
                    <label className="form-label">Current Username:</label>
                    <i>{password}</i><br></br>
                    <label className="form-label">Edit Password:</label>
                    <input className="form-control" onChange={(event) => setPassword(event.target.value)}></input><br></br>
                </div>
                <div className="form-div">
                    <label className="form-label">Current Username:</label>
                    <i>{preferredName}</i><br></br>
                    <label className="form-label">Edit Preferred Name:</label>
                    <input className="form-control" onChange={(event) => setPreferredName(event.target.value)}></input><br></br>
                </div>
                <button onClick={(event) => updateUser(event)} className="form-button btn btn-primary me-1">Update</button>
                <button type="button"  onClick={() => navigate('/NewContactList', { replace: true, state:userObj})} className="form-button btn btn-primary ms-1">Cancel</button>
            </form>
        </div>
    )
};

export default EditUser;