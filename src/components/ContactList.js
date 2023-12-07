//This component will show a list of all your contacts which you can click into to view. I should also include a button to add a new Contact
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

import { contactsAPI } from "../restAPI/ContactsAPI";
import Contact from "./Contact";

function ContactList() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();

    useEffect(
        () => {
            getUser()
        }, []
    );

    const getUser = async () => {
        try {
            const resp = await contactsAPI.get();
            setUsers(resp);
        }
        catch {
            console.log('Failed getUser func.')
        }
    };

    const handleClick = (e,userIndex) => {
        e.preventDefault();
        setSelectedUser(userIndex);
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    const handleDelete = (status) => {
        if (status === true){
            getUser();
        }
    }

    return (
        <div className='contact-list'>
            <h1>Contact List</h1>
            <div className="grid-div-parent">
                <div className="grid-div-child-left">
                    <table className="contact-list-table table table-dark table-hover">
                        <thead>
                            <tr>
                                <th className="fs-3" id="table-head">Contacts   <Link to='/NewContact'>
                                                                    <button className="btn btn-light">
                                                                        New Contact
                                                                    </button>
                                                                </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                
                                    <tr key={index}>
                                        <td id="left-align">
                                            <p onClick={(e) => handleClick(e, index)} id="contact">{user.firstName} {user.lastName}</p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="grid-div-child-right">
                    <Contact contact={users[selectedUser]} deleted={handleDelete}></Contact>
                </div>
            </div>
        </div>
    )
};

export default ContactList