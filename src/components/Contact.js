//This component will allow us to view the chosen contact and also edit if needed.

import { useNavigate } from "react-router-dom";
import { contactsAPI } from "../restAPI/ContactsAPI";

function Contact (props) {
    
    const {firstName, lastName, phone,
        email, streetAddress, city,
        state, zipcode, id} = props.contact|| {};

    const navigate = useNavigate();

    function handleEdit () {
        navigate('/EditContact', {state: props.contact})
    }

    const deleteContact = async (e) => {
        e.preventDefault();
        try {
            await contactsAPI.delete(id);
            props.deleted(true);
        }
        catch {
            console.log('Failed deleteContact func.')
        }
    }

    return (
            props.contact === undefined? 
            (<div>
                <p className="fs-2 fst-italic">Please Select a Contact</p>
            </div>)
            :(<>
                <div className="new-contact-form bg-body-tertiary mt-5">
                    <div className="section-div fs-4">
                        <label>First Name:</label>
                        {firstName}
                    </div>
                    <div className="section-div fs-4">
                        <label>Last Name:</label>
                        {lastName}
                    </div>
                    <div className="section-div fs-4">
                        <label>Phone:</label>
                        {phone}
                    </div>
                    <div className="section-div fs-4">
                        <label>Email:</label>
                        {email}
                    </div>
                    <div className="section-div fs-4">
                        <p style={{ fontWeight: 'bold' }}>
                            Address:
                        </p>
                        <div className="section-div-address">
                            <div className="section-div">
                                <label>Street Addres:</label>
                                {streetAddress}
                            </div>
                            <div className="section-div">
                                <label>City:</label>
                                {city}
                            </div>
                            <div className="section-div">
                                <label>State:</label>
                                {state}
                            </div>
                            <div className="section-div">
                                <label>ZipCode:</label>
                                {zipcode}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn btn-group">
                    <button className="btn btn-dark" id="contact-edit-button" onClick={() => handleEdit()}>Edit</button>
                    <button className="btn btn-dark" id="contact-edit-button" onClick={(e) => deleteContact(e)}>Delete</button>
                </div>
            </>)
    )
};

export default Contact