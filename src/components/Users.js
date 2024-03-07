import { usersAPI } from "../restAPI/UsersAPI"
import { useState, useEffect } from "react"

function Users() {

    const [users, setUsers] = useState([]);

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
            console.log('Failed getUser func.')
        }
    };

    const deleteUser = async (user, index) => {
        try {
            if (index !== 0 && user.userName !== 'testuser') {
                await usersAPI.delete(user.id);
                getUser();
            } else {
                throw new Error();
            }
        } catch {
            console.log(`You cannot delete this user`);
        }
    };

    return (
        <div>
            <h1>Users Component</h1>
            <table className="table table-dark table-hover" style={{ margin: 'auto', width: '50%' }}>
                <thead className="text-start">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index} className="table-rows ">
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.password}</td>
                                <td><button type="button" className="btn btn-light" onClick={() => deleteUser(user, index)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;