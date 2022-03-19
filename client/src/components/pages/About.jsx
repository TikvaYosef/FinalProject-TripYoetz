import React from 'react'
import { StyledAbout } from '../styles/pages/StyledAbout';

const About = () => {
    return (
        <StyledAbout>
            <section>
                <h1 className='title' >
                    welcome to tripYoetz
                </h1>
                <article className='dataArticale'>
                    <div className='data'>
                        <h1>About The Site</h1>
                        <p>The site is engaged in helping the general public <br />
                            in search of restaurant , hotel and attractions ,all on one site <br />
                            What's required of you is to enter the city.
                        </p>
                    </div>
                    <div className='data'>
                        <h1>Contact Us</h1>
                        <h4>Location</h4>
                        <img src="" alt="" />
                        <div className='phone'>
                            <h4>Phone</h4>
                        </div>
                        <p>054-8789426</p>
                        <h4>Email</h4>
                        <p>contact@TripYoetz.com</p>
                        <h4>Activity time</h4>



                    </div>
                </article>
                <div className='aboutus'>
                    <h1>About Us</h1>
                </div>
            </section>
            <img src="" alt="" />
        </StyledAbout>
    )
}
export default About;

