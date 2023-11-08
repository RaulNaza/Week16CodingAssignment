//This component will show a list of all your contacts which you can click into to view. I should also include a button to add a new Contact

import { Link } from "react-router-dom"


function ContactList () {


    return (
        <>
            <h1>Contact List</h1>
            <p>This component will show a list of all your contacts which you can click into to view. I should also include a button to add a new Contact</p>

            <div>
                This will have a button that will Link to the new contact Page<br></br>
                <Link to='/NewContact'>
                    <button>
                        Add New Contact
                    </button>
                </Link>
            </div>

            <p>Below is fake hardcoded contacts. This will need to be dynamic.</p>
            
            <ul>
                <li>
                    <Link to='/ContactList/1'>Contact One</Link>
                </li>
                <li>
                    <Link to='/ContactList/2'>Contact Two</Link>
                </li>
            </ul>
        </>
    )
};

export default ContactList