import { usersAPI } from "../restAPI/UsersAPI";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NewUserContact() {
    const location = useLocation();
    const userObj = location.state;

    const { id, userName, password, contactList, preferredName } = userObj;

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const addContact = async (event) => {
        event.preventDefault();
        try {
            const contactObj = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                streetAddress: streetAddress,
                city: city,
                state: state,
                zipcode: zipcode
            };

            const contactArr = [
                ...contactList,
                contactObj
            ];
            const updatedUserInfo = {
                id: id,
                userName: userName,
                password: password,
                preferredName: preferredName,
                contactList: contactArr
            };

            await usersAPI.put(id, updatedUserInfo);
            navigate('/NewContactList', { state: updatedUserInfo });
        }
        catch {
            console.log('Failed addContact func.');
        }

    };

    const backToContactList = () => {
        navigate('/NewContactList', { state: userObj });
    };

    const handlePhone = (value) => {
        let phoneFormated = '';

        const areCode = value.slice(0, 3);
        const mid = value.slice(3, 6);
        const lastFour = value.slice(6);

        if (value.length >= 6) {
            phoneFormated = `${areCode}-${mid}-${lastFour}`;
            setPhone(phoneFormated);
        } else if (value.length >= 3) {
            phoneFormated = `${areCode}-${mid}`;
            setPhone(phoneFormated);
        } else {
            setPhone(areCode);
        }

    };


    return (
        <>
            <h1 className="mt-2">New Contact:</h1>

            <form className='new-contact-form bg-secondary-subtle'>
                <div className="section-div">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" maxLength={44} onChange={(event) => setFirstName(event.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" maxLength={44} onChange={(event) => setLastName(event.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Phone:</label>
                    <input className="form-control" maxLength={10} onChange={(event) => handlePhone(event.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Email:</label>
                    <input className="form-control" onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="section-div">
                    <p style={{ fontWeight: 'bold' }}>
                        Address
                    </p>
                    <div className="section-div-address">
                        <div className="section-div">
                            <label className="form-label">Street Addres:</label>
                            <input className="form-control" onChange={(event) => setStreetAddress(event.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">City:</label>
                            <input className="form-control" onChange={(event) => setCity(event.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">State:</label>
                            <input className="form-control" onChange={(event) => setState(event.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">ZipCode:</label>
                            <input className="form-control" maxLength={5} onChange={(event) => setZipcode(event.target.value)}></input>
                        </div>
                    </div>
                    <button type="submit" className="form-button btn btn-dark ms-1 me-5" onClick={(event) => addContact(event)}>Add New Contact</button>
                    <button type="button" className="form-button btn btn-dark ms-5" onClick={() => backToContactList()}>Cancel</button>
                </div>
            </form>

        </>
    );



}

export default NewUserContact;