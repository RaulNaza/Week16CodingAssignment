import ProfPortrait from '../image/ProfessionalPhoto.jpeg'

function ThankYou() {

    return (
        <div>
            <p className="fs-1 fw-bolder">Thank you for visiting!</p>
            <img className='rounded-circle' src={ProfPortrait} alt='Prof portrait'></img>
            <p className="fs-4 fst-italic mt-3">
                Author:{' '}
                <a
                    rel='external noreferrer'
                    href='https://github.com/RaulNaza'
                    target='_blank'
                    style={{ textDecoration: 'underline', color: "black" }}
                >
                    Raul Nazario Gonzales
                </a>
                {' '}<i className="bi bi-github" />
            </p>
        </div>
    )
}

export default ThankYou;