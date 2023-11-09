import { usersAPI } from "../restAPI/Users" 
import { useState, useEffect } from "react"

function Users () {

    const [users,setUsers] = useState([]);

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

    const deleteUser = async (event,id) => {
        try{
            event.preventDefault();
            await usersAPI.delete(id);

            getUser();
        }
        catch{
            console.log('Failed deleteUser func.')
        }
    }


    return (
        <div>
            <h1>Users Component</h1>
                <table className="table table-dark table-hover" style={{margin: 'auto', width: '50%'}}>
                    <thead className="text-start">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index} className="table-rows ">
                                    <td>{index}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.password}</td>
                                    <td><button className="btn btn-light" onClick={(event) => deleteUser(event,user.id)}>Delete</button></td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
        </div>
    )
}

export default Users