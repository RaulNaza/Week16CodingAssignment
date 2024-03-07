import { useNavigate } from "react-router-dom";


function LogOutButton() {
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/ThankYou', {state: true ,replace: true});
    };

    return (
        <button type="button" className="btn btn-dark mb-1 ms-1" onClick={() => logOut()}>Log Out</button>
    )
}

export default LogOutButton;