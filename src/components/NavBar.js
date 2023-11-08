//NavBar

import { Link } from "react-router-dom";



function NavBar () {
    return(
        <nav>
            <Link to='/'>Home</Link><br></br>
            <Link to='/ContactList'>Contact List</Link>
        </nav>
    )
};

export default NavBar