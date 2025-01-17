import { usersAPI } from "../restAPI/UsersAPI";
import { useState } from "react";

function EditContact(props) {
    const handleEditSubmit = props.handleEditSubmit;
    const handleEditButton = props.handleEditButton;
    const contactIndex = props.contactIndex;
    
    const contactObj = props.userContact;
    
    const user = props.user;
    const { id, userName, password, preferredName, contactList } = user;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const editContact = async (event) => {
        event.preventDefault()
        try {
            const updatedContactInfo = {
                firstName: firstName || contactObj.firstName,
                lastName: lastName || contactObj.lastName,
                phone: phone || contactObj.phone,
                email: email || contactObj.email,
                streetAddress: streetAddress || contactObj.streetAddress,
                city: city || contactObj.city,
                state: state || contactObj.state,
                zipcode: zipcode || contactObj.zipcode
            };

            const newContactList = contactList.slice();
            newContactList.splice(contactIndex, 1, updatedContactInfo);

            const userObj = {
                userName: userName,
                password: password,
                preferredName: preferredName,
                contactList: newContactList
            };

            await usersAPI.put(id, userObj);

            handleEditSubmit(updatedContactInfo, false);
        }
        catch {
            console.log('Failed editContact func');
        }
    };

    const handlePhone = (value) => {
        let phoneFormated = '';
        
        const areCode = value.slice(0,3);
        const mid = value.slice(3,6);
        const lastFour = value.slice(6);

        if(value.length >= 6){
            phoneFormated = `${areCode}-${mid}-${lastFour}`;
            setPhone(phoneFormated);
        }else if (value.length >= 3){
            phoneFormated = `${areCode}-${mid}`;
            setPhone(phoneFormated);
        }else{
            setPhone(areCode);
        }
        
    };

    return (
        <>
            <h1>Edit {contactObj.firstName} {contactObj.lastName}:</h1>
            <form className='edit-contact-form bg-secondary-subtle'>
                <div className="section-div">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" maxLength={44} onChange={(event) => setFirstName(event.target.value)}></input>
                    <label className="form-label">{contactObj.firstName}</label>
                </div>
                <div className="section-div">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" maxLength={44} onChange={(event) => setLastName(event.target.value)}></input>
                    <label className="form-label">{contactObj.lastName}</label>
                </div>
                <div className="section-div">
                    <label className="form-label">Phone:</label>
                    <input className="form-control" maxLength={10}  onChange={(event) => handlePhone(event.target.value)} ></input>
                    <label className="form-label">{contactObj.phone}</label>
                </div>
                <div className="section-div">
                    <label className="form-label">Email:</label>
                    <input className="form-control" onChange={(event) => setEmail(event.target.value)} ></input>
                    <label className="form-label">{contactObj.email}</label>
                </div>
                <div className="section-div">
                    <p style={{ fontWeight: 'bold' }}>
                        Address
                    </p>
                    <div className="section-div-address">
                        <div className="section-div">
                            <label className="form-label">Street Addres:</label>
                            <input className="form-control" onChange={(event) => setStreetAddress(event.target.value)}></input>
                            <label className="form-label">{contactObj.streetAddress}</label>
                        </div>
                        <div className="section-div">
                            <label className="form-label">City:</label>
                            <input className="form-control" onChange={(event) => setCity(event.target.value)}></input>
                            <label className="form-label">{contactObj.city}</label>
                        </div>
                        <div className="section-div">
                            <label className="form-label">State:</label>
                            <input className="form-control" onChange={(event) => setState(event.target.value)}></input>
                            <label className="form-label">{contactObj.state}</label>
                        </div>
                        <div className="section-div">
                            <label className="form-label">ZipCode:</label>
                            <input className="form-control" maxLength={5}  onChange={(event) => setZipcode(event.target.value)}></input>
                            <label className="form-label">{contactObj.zipcode}</label>
                        </div>
                    </div>
                    <button className="form-button btn btn-dark ms-2 me-3" onClick={(event) => editContact(event)}>Submit</button>
                    <button type="button" className="form-button btn btn-dark" onClick={() => handleEditButton(false)}>Cancel</button>
                </div>
            </form >
        </>

    )
}

export default EditContact;