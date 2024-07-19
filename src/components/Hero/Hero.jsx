import React from 'react'
import './Hero.css'
import Resume from './21PA1A5408_SAI_GANESH_RESUME.pdf'


const Hero = () => {
  return (
    <section id='about-page' className='hero-container'>
        <div className='hero-content'>
            <div className='about-div'>
                <h2>Hey There<span role="img" aria-label="wave">👋</span> ..!</h2>
                <h4>I am <span className='typewriter'> Sai Ganesh Gupta!!</span></h4>
                <p>
                    Passionate FrontEnd Developer | Transforming Ideas into Seamless and
                    Visually Stunning Web Solutions
                </p>
            </div>
            <div id='icons-div'>
                <div id='down-resume'>
                    <div className='resume'><a href={Resume} download="My_Resume.pdf" className='resume-link'><button className='resume-btn'>Download My Resume<span role="img" aria-label="pointing down">👇</span></button></a></div>
                </div>
                <div id='social-media'>
                    <div className='tech-icon'>
                        <a href='https://github.com/Sai-Ganesh-Gupta-Athmuri'><img id='react-icon' src='./assets/images/gh.png' alt='' /></a>
                    </div>
                    <div className='tech-icon'>
                        <a href='https://www.linkedin.com/in/sai-ganesh-gupta-athmuri-81a05423b/'><img className='icons' src='./assets/images/linkedin.png' alt='' /></a>
                    </div>
                    <div className='tech-icon'>
                        <a href='https://leetcode.com/u/Athmuri_V_V_A_Sai_Ganesh_Gupta/'><img className='icons' src='./assets/images/leetcode.png' alt='' /></a>
                    </div>
                    <div className='tech-icon'>
                        <a href='https://www.codechef.com/users/saiganesh_0908'><img className='icons' src='./assets/images/codechef.png' alt='' /></a>
                    </div>
                    <div className='tech-icon'>
                        <a href='https://www.geeksforgeeks.org/user/21pa1a5408/'><img className='icons' src='./assets/images/geeksforgeeks.png' alt='' /></a>
                    </div>
                </div>
            </div>
        </div>
        <div id='main-div'>
            <div className='hero-img'>
                <div>
                    <img id = 'profile' src='./assets/images/profile.jpg' alt='' />
                </div>
            </div> 
        </div>
        
    </section>
  );
}

export default Hero