//this will be our Home page and it will be simple just showing your name and a link to open your contacts

function Home () {
    return (
        <>
            <h1>Home</h1>
            <p>This will be our Home page and it will be simple just showing your name and a link to open your contacts.</p>

            <h1>Welcome!</h1>

            {/* this can be a login page. Update for later */}
            <form className="log-in-form">
                <label>Your name</label>
                <input></input><br></br>
                <button>Log In</button>
            </form>
        </>
    )
};

export default Home