import React from 'react'
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
                        <p className='aboutTheSite'>The site is engaged in helping the general public <br />
                            in search of restaurant , hotel and attractions ,all on one site <br />
                            What's required of you is to enter the city.
                        </p>
                    </div>
                    <div className='data'>
                        <h1 className='BoxTitle'>Contact Us</h1>
                        <h4 className='littelTitle'>Location</h4>
                        <img src="" alt="" />
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
                        <button className='downArrow'><ArrowCircleDownIcon /></button>
                    </div>
                </div>
            </section>
            <img src="" alt="" />
        </StyledAbout>
    )
}
export default About;

