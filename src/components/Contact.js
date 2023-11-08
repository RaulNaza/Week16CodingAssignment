//This component will allow us to view the chosen contact and also edit if needed.
import { useParams } from "react-router-dom";


function Contact () {
    const {id} = useParams();

    return (
        <>
            <h1>Contact at ID: {id}</h1>
            <p>This component will allow us to view the chosen contact and also edit if needed.</p>
        </>
    )
};

export default Contact