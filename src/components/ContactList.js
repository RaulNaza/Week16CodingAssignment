import { usersAPI } from "../restAPI/UsersAPI";

import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";

import Contact from "./Contact";
import EditContact from "./EditContact";
import LogOutButton from "./LogOut";

function ContactList() {
    const location = useLocation();
    const userObj = location.state;
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id, userName, password, contactList, preferredName } = user;

    const [selectedContact, setSelectedContact] = useState();
    const [contactIndex, setContactIndex] = useState(null);
    const [viewContact, setViewContact] = useState(false);

    const [editButton, setEditButton] = useState(false);

    useEffect(
        () => {
            getSingleUser(userObj.id);
        }, [userObj.id, selectedContact]
    );

    const getSingleUser = async (id) => {
        try {
            const resp = await usersAPI.getSingleUser(id);
            setUser(resp);
        }
        catch {
            console.log('Failed getUser func.');
        }
        finally {
            setLoading(false);;
        }
    };

    const editUser = () => {
        navigate('/EditUser', { state: user });
    };

    const addNewContact = async () => {
        try {
            navigate('/NewUserContact', { state: user });
        }
        catch {
            console.log('Failed addNewContact func.');
        }
    };

    const openContactCard = (contact, index) => {
        setSelectedContact(contact);
        setContactIndex(index);
        setViewContact(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const deleteContact = async (index) => {
        try {
            const newContactList = contactList.toSpliced(index, 1);
            const updatedUserInfo = {
                id: id,
                userName: userName,
                password: password,
                contactList: newContactList,
                preferredName: preferredName
            };

            await usersAPI.put(id, updatedUserInfo);

            getSingleUser(id);
            setSelectedContact({});
            setViewContact(false);
        }
        catch {
            console.log('Failed deleteContact func.');
        }
    };

    const handleEditButton = (response) => {
        setEditButton(response);
    };

    const handleEditSubmit = (updatedContactInfo, response) => {
        setSelectedContact(updatedContactInfo);
        setEditButton(response);
    };

    const deleteUser = () => {
        const dialog = document.getElementById("delete-user");
        dialog.showModal();

        const cancelButton = document.getElementById("cancel");
        const confirmButton = document.getElementById("confirm");

        cancelButton.addEventListener('click', () => {
            dialog.close();
        });

        confirmButton.addEventListener('click', async () => {
            try {
                await usersAPI.delete(id);
                navigate('/', { replace: true });
            }
            catch {
                console.log('Failed to delete user!');
            }
        });
    };

    if (loading) {
        return (
            <div>
                <p className="fs-1 fw-bolder">
                    Loading...
                </p>
            </div>
        )
    } else {
        return (
            <div className='contact-list'>
                <header>
                    <h1 className="text-capitalize">{preferredName}</h1>
                    <button type="button" className="btn btn-dark mb-1 me-1" onClick={() => editUser()} >Edit User</button>
                    <button type="button" className="btn btn-dark mb-1 ms-1" onClick={() => deleteUser()}>Delete User</button>
                    <LogOutButton />
                    <>
                        <dialog id="delete-user" style={{ borderRadius: "1rem", width: "26rem" }}>
                            <form>
                                <label className="text-center text-wrap" >
                                    Please confirm that you want to delete the below:<br />
                                    <p className="text-start mt-1 font-monospace">
                                        <b>User:</b> {preferredName}<br />
                                        <b>Username:</b> {userName}<br />
                                    </p>
                                </label>
                                <div>
                                    <button id="cancel" type="button" className="btn btn-dark mb-1 me-1" >Cancel</button>
                                    <button id="confirm" type="button" className="btn btn-dark mb-1 ms-1" >Confirm</button>
                                </div>
                            </form>
                        </dialog>
                    </>
                </header>
                <div className="grid-div-parent">
                    <div className="grid-div-child-left">
                        {/* {className="table table-dark table-striped-columns table-hover"} */}
                        <table className="contact-list-table">
                            <thead>
                                <tr>
                                    <th className="fs-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 20 20">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                        </svg>
                                        Contacts</th>
                                    <th>
                                        <button type="button" className="btn btn-light" onClick={() => addNewContact()}>
                                            Add New Contact
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="contact-list">
                                {
                                    contactList.map((contact, index) => (
                                        <tr key={index} >
                                            <td id="contact-name" onClick={() => openContactCard(contact, index)}>
                                                {contact.firstName} {contact.lastName}
                                            </td>
                                            <td id="contact-button" >
                                                <button className="btn btn-light" onClick={() => deleteContact(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="grid-div-child-right">
                        {
                            !viewContact ?
                                <p className="fs-3 fst-italic mt-2">Please Select A Contact</p> :
                                editButton ?
                                    <EditContact userContact={selectedContact} contactIndex={contactIndex} user={user} handleEditSubmit={handleEditSubmit} handleEditButton={handleEditButton}></EditContact> :
                                    <Contact contact={selectedContact} handleEditButton={handleEditButton}></Contact>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList;