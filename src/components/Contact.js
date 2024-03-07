function Contact(props) {
    const { firstName, lastName, phone,
        email, streetAddress, city,
        state, zipcode } = props.contact || {};

    const handleEditButton = props.handleEditButton;

    return (
        <>
            <div className="new-contact-form bg-secondary-subtle mt-5">
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
            <button className="btn btn-dark" id="contact-edit-button" onClick={() => handleEditButton(true)}>Edit</button>
        </>

    )

}

export default Contact;