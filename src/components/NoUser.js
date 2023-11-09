// import { useNavigate } from "react-router-dom";


function NoUser () {

    // const navigate = useNavigate();

    // function handleClick () {
    //     navigate('/', {replace: true})
    // }

    return (
        <div className="mt-5">
            <p className="fs-1 fw-bolder">404 Error... No User Found</p>
            <p className="fs-4 fst-italic">No users has been found with those credentials. Please check review and try again or create a new user.</p>
            <i className="bi bi-emoji-frown-fill fs-1" ></i>
        </div>
    )
}

export default NoUser