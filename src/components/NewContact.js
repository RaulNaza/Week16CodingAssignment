//Will allow us to create a new contact
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { contactsAPI } from "../restAPI/ContactsAPI";

function NewContact () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            getUser()
        }, []
    );

    const getUser = async () => {
        try{
            await contactsAPI.get();
        }
        catch{
            console.log('Failed getUser func.')
        }
    };

    const addContact = async (e) => {
        e.preventDefault();
        try{
            let phoneNumber = '';
            for (let i = 0; i < phone.length; i++){
                phoneNumber += phone[i];
                if(i === 2) phoneNumber += '-';
                if(i === 5) phoneNumber += '-';
            }

            const contactObj = {
                firstName: firstName,
                lastName: lastName,
                phone: phoneNumber,
                email: email,
                streetAddress: streetAddress,
                city: city,
                state: state,
                zipcode: zipcode
            }
            await contactsAPI.post(contactObj);
            navigate('/ContactList', {replace: true});
        }
        catch{
            console.log('Failed addContact func.')
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
            <h1>New Contact</h1>

            <form className='new-contact-form bg-secondary-subtle'>
                <div className="section-div">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" onChange={(e)=> setFirstName(e.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" onChange={(e)=> setLastName(e.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Phone:</label>
                    <input className="form-control" id="phone-input" onChange={(e)=> setPhone(e.target.value)} maxLength={10} placeholder="xxx-xxx-xxxx"></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Email:</label>
                    <input className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
                <div className="section-div">
                    <p style={{fontWeight: 'bold'}}>
                        Address
                    </p>
                    <div className="section-div-address">
                        <div className="section-div">
                            <label className="form-label">Street Addres:</label>
                            <input className="form-control" onChange={(e)=> setStreetAddress(e.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">City:</label>
                            <input className="form-control" onChange={(e)=> setCity(e.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">State:</label>
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
                        </div>
                    </div>
                        <button className="form-button btn btn-dark" onClick={(e)=>addContact(e)}>Add New Contact</button>
                </div>
            </form>

        </>
    )
};

export default NewContact