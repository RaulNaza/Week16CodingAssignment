//NavBar

import { NavLink } from "react-router-dom";


function NavBar () {



    return(
        <div className="container-fluid" id="nav-div">
            <ul className="nav nav-pills justify-content-center mt-3 mb-3 fs-5">
                <li className="nav-item">
                    <NavLink className="nav-link fs-4" activeclassname='active' to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link fs-4" activeclassname='active' to='/ThankYou'>Thank You!</NavLink>
                </li>
            </ul>
        </div>        
    )
};

export default NavBar
