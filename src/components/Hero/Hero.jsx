import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <h4>I am Sai Ganesh Gupta Athmuri!!</h4>
            <p>
                Passionate FrontEnd Developer | Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>
        <div id='main-div'>
            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img id='react-icon' src='./assets/images/physics.png' alt='' />
                    </div>
                    <img id = 'profile' src='./assets/images/profile.png' alt='' />
                </div>
            </div>
            <div id='icons-div'>
                <div className='tech-icon'>
                    <img className='icons' src='./assets/images/html.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img className='icons' src='./assets/images/css-3.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img className='icons' src='./assets/images/js.png' alt='' />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero