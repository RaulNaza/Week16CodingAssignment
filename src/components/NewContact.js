//Will allow us to create a new contact

import { Link } from "react-router-dom"

function NewContact () {
    return (
        <>
            <h1>New Contact</h1>

            <form className='new-contact-form'>
                <div className="section-div">
                    <label>First Name:</label>
                    <input></input>
                </div>
                <div className="section-div">
                    <label>Last Name:</label>
                    <input></input>
                </div>
                <div className="section-div">
                    <label>Phone:</label>
                    <input></input>
                </div>
                <div className="section-div">
                    <label>Email:</label>
                    <input></input>
                </div>
                <div className="section-div">
                    <p style={{fontWeight: 'bold'}}>
                        Address
                    </p>
                    <div className="section-div-address">
                        <div className="section-div">
                            <label>Street Addres:</label>
                            <input></input>
                        </div>
                        <div className="section-div">
                            <label>City:</label>
                            <input></input>
                        </div>
                        <div className="section-div">
                            <label>State:</label>
                            <input></input>
                        </div>
                        <div className="section-div">
                            <label>ZipCode:</label>
                            <input></input>
                        </div>
                    </div>
                    <Link to='/ContactList'>
                        <button>Add New Contact</button>
                    </Link>
                </div>
            </form>

        </>
    )
};

export default NewContact