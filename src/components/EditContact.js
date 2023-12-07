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

            let phoneNumber = '';
            for (let i = 0; i < phone.length; i++){
                // console.log(phone[i]);
                phoneNumber += phone[i];
                if(i === 2) phoneNumber += '-';
                if(i === 5) phoneNumber += '-';
            }

            const newObj = {
                ...userObj,
                firstName: firstName || userObj.firstName,
                lastName: lastName || userObj.lastName,
                phone: phoneNumber || userObj.phone,
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

    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
        'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
        'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ];

    return (
        <>
            <h1>Editing {userObj.firstName} {userObj.lastName}:</h1>
            <form className='edit-contact-form bg-body-tertiary'>
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
                    <input className="form-control" maxLength={10} onChange={(e)=> setPhone(e.target.value)} ></input>
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
                            <label className="form-label">State: {userObj.state}</label>
                            <select className="form-select" defaultValue="placeholder" onClick={(e) => setState(e.target.value)}>
                                <option value="placeholder" disabled>Select a state</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <div className="section-div">
                            <label className="form-label">ZipCode:</label>
                            <input className="form-control" maxLength={5} onChange={(e)=> setZipcode(e.target.value)}></input>
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