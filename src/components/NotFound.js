//This will be the component used for when a link does not match any of our paths

function NotFound () {
    return (
        <div className="mt-5">
            <p className="fs-1 fw-bolder">404 Error... Page Not Found</p>
            <i className="bi bi-emoji-frown-fill fs-1" ></i>
        </div>
    )
}

export default NotFound