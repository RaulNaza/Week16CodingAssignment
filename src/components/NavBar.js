import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const path = useLocation().pathname;

    return (
        <div className="border bg-dark-subtle">
            <ul className="nav nav-pills justify-content-center mt-3 mb-3 fs-5">
                <li className="nav-item">
                    {path === "/ContactList" ? (
                        <span className="nav-link disabled">Home</span>
                    ) : (
                        <Link className="nav-link" to='/'>
                            Home
                        </Link>
                    )}
                </li>
                <li className="nav-item">
                    {path === "/ContactList" ? (
                        <span className="nav-link disabled">Thank You!</span>
                    ) : (
                        <Link className="nav-link" to='/ThankYou'>
                            Thank You!
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
