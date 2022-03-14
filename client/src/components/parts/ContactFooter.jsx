import { StyledContactFooter } from "../styles/parts/StyledContactFooter";

const ContactFooter = ({ name, email, linkedin, github, img }) => {
    return (
        <StyledContactFooter>
            <h1 className="contact-name">{name}</h1>
            <img className="image-popup" src={img} alt={`${name} img`} />
            <div className="contact-icons-box">
                <a className="icon-link" href={email}><i className="fa fa-envelope"></i></a>
                <a className="icon-link" href={linkedin}><i className="fa fa-linkedin"></i></a>
                <a className="icon-link" href={github}><i className="fa fa-github"></i></a>
            </div>
        </StyledContactFooter>
    )
};

export default ContactFooter;