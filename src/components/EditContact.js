import { useLocation, useNavigate } from "react-router-dom"
import { contactsAPI } from "../restAPI/ContactsAPI";
import { useState } from "react";

function EditContact () {
    const location = useLocation();
    const userObj  = location.state;
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');


    const editContact = async (e) => {
        e.preventDefault()
        const {id} = userObj;
        try{

            const newObj = {
                ...userObj,
                firstName: firstName || userObj.firstName,
                lastName: lastName || userObj.lastName,
                phone: phone || userObj.phone,
                email: email || userObj.email,
                streetAddress: streetAddress || userObj.streetAddress,
                city: city || userObj.city,
                state: state || userObj.state,
                zipcode: zipcode || userObj.zipcode
            }

            await contactsAPI.put(id,newObj);
            navigate('/ContactList', {replace: true})
        }
        catch{
            console.log('Failed editContact func')
        }
    }






    console.log(userObj);
    return (
        <>
            <h1>Editing {userObj.firstName} {userObj.lastName}:</h1>
            <form className='edit-contact-form bg-secondary-subtle'>
                <div className="section-div">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" onChange={(e)=> setFirstName(e.target.value)}></input>
                    <label className="form-label">{userObj.firstName}</label>
                </div>
                <div className="section-div">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" onChange={(e)=> setLastName(e.target.value)}></input>
                    <label className="form-label">{userObj.lastName}</label>
                </div>
                <div className="section-div">
                    <label className="form-label">Phone:</label>
                    <input className="form-control" onChange={(e)=> setPhone(e.target.value)} ></input>
                    <label className="form-label">{userObj.phone}</label>
                </div>
                <div className="section-div">
                    <label className="form-label">Email:</label>
                    <input className="form-control" onChange={(e)=> setEmail(e.target.value)} ></input>
                    <label className="form-label">{userObj.email}</label>
                </div>
                <div className="section-div">
                    <p style={{fontWeight: 'bold'}}>
                        Address
                    </p>
                    <div className="section-div-address">
                        <div className="section-div">
                            <label className="form-label">Street Addres:</label>
                            <input className="form-control" onChange={(e)=> setStreetAddress(e.target.value)}></input>
                            <label className="form-label">{userObj.streetAddress}</label>
                        </div>
                        <div className="section-div">
                            <label className="form-label">City:</label>
                            <input className="form-control" onChange={(e)=> setCity(e.target.value)}></input>
                            <label className="form-label">{userObj.city}</label>
                        </div>
                        <div className="section-div">
                            <label className="form-label">State:</label>
                            <input className="form-control" onChange={(e)=> setState(e.target.value)}></input>
                            <label className="form-label">{userObj.state}</label>
                        </div>
                        <div className="section-div">
                            <label className="form-label">ZipCode:</label>
                            <input className="form-control" onChange={(e)=> setZipcode(e.target.value)}></input>
                            <label className="form-label">{userObj.zipcode}</label>
                        </div>
                    </div>
                        <button className="form-button btn btn-dark ms-2" onClick={(e)=>editContact(e)}>Submit</button>
                </div>
            </form>
        </>
        
    )
}

export default EditContact