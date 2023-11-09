import ProfPortrait from '../image/ProfessionalPhoto.jpeg'

function ThankYou () {
    return(
        <div>
            <p className="fs-1 fw-bolder">Thank you for visiting!</p>
            <img className='rounded-circle' src={ProfPortrait} alt='Prof portrait'></img>
            <p className="fs-4 fst-italic">Author: Raul Nazario</p>
        </div>
    )
}

export default ThankYou