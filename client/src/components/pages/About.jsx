import { StyledAbout } from '../styles/pages/StyledAbout';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const About = () => {
    return (
        <StyledAbout>
            <section>
                <h1 className='title' >
                    welcome to tripYoetz
                </h1>
                <article className='dataArticale'>
                    <div className='data'>
                        <h1 className='BoxTitle'>About The Site</h1>
                        <h3 className='aboutTheSite'>About Tripadvisor
TripYoetz, the world's largest travel guidance platform*,
 helps hundreds of millions of people each month** become better travelers,
  from planning to booking to taking a trip.
   Travelers across the globe use the Tripadvisor site and app to discover where to stay,
    what to do and where to eat based on guidance from those who have been there before.
     With more than 1 billion reviews and opinions of nearly 8 million businesses,
    travelers turn to Tripadvisor to find deals on accommodations, book experiences,
     reserve tables at delicious restaurants and discover great places nearby.
      As a travel guidance company available in 43 markets and 22 languages,
 Tripadvisor makes planning easy no matter the trip type.
                        </h3>
                    </div>
                    <div className='data'>
                        <h1 className='BoxTitle'>Contact Us</h1>
                        <h4 className='littelTitle'>Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d846.3125351330848!2d34.89101144280896!3d31.95410998709867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1647873990485!5m2!1siw!2sil" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                        <div className='phone'>
                            <h4 className='littelTitle'>Phone</h4>
                        </div>
                        <p>054-8789426</p>
                        <h4 className='littelTitle'>Email</h4>
                        <p>contact@TripYoetz.com</p>
                        <h4 className='littelTitle'>Activity time</h4>
                        <p>24/7</p>
                    </div>
                </article>
                <div className='aboutus'>
                    <h1 className='BoxTitle'>About Us</h1>
                    <div className='infoAboutUs'>
                        <div>
                            <h4>Avi</h4>
                            <p>26 years old</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Inventore accusamus natus cumque consectetur eligendi id non recusandae ullam rem.<br /> Reiciendis earum nemo esse perspiciatis saepe praesentium dolore impedit error alias.</p>
                        </div>
                        <div>
                            <h4>Tikva</h4>
                            <p>26 years old</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Inventore accusamus natus cumque consectetur eligendi id non recusandae ullam rem.<br /> Reiciendis earum nemo esse perspiciatis saepe praesentium dolore impedit error alias.</p>
                        </div>
                        <div>
                            <h4>Marcos</h4>
                            <p>24 years old</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Inventore accusamus natus cumque consectetur eligendi id non recusandae ullam rem.<br /> Reiciendis earum nemo esse perspiciatis saepe praesentium dolore impedit error alias.</p>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h1>for more projects</h1>
                    <ArrowCircleDownIcon />
                    </div>
                </div>
            </section>
      
        </StyledAbout>
    )
}
export default About;

