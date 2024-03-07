function NoUser() {

    return (
        <div className="mt-5">
            <p className="fs-1 fw-bolder">Error... No User Found</p>
            <p className="fs-4 fst-italic">No users has been found with those credentials. Please review and try again or create a new user.</p>
            <i className="bi bi-emoji-frown-fill fs-1" ></i>
        </div>
    )
}

export default NoUser;