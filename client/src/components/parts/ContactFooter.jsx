import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledContactFooter } from "../styles/parts/StyledContactFooter";

const ContactFooter = ({ name, info, email, linkedin, github, img }) => {
    const { mode } = useContext(ThemeContext);
    return (
        <StyledContactFooter className={name} mode={mode}>
            <h1 className="developer-name">{name}</h1>
            <h2 className="developer-info">{info}</h2>
            <img className="developer-image" src={img} alt={`${name} img`} />
            <div className="contact-icons-box">
                <a href={`mailto:${email}`}><i className="fa fa-envelope contact-icon"></i></a>
                <a target="_blank" rel="noreferrer" href={linkedin}><i className="fa fa-linkedin contact-icon"></i></a>
                <a target="_blank" rel="noreferrer" href={github}><i className="fa fa-github contact-icon"></i></a>
            </div>
        </StyledContactFooter>
    )
};

export default ContactFooter;