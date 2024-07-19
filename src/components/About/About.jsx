import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;
        const textElement = textRef.current;

        const handleScroll = () => {
            const imagePosition = imageElement.getBoundingClientRect().top;
            const textPosition = textElement.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (imagePosition < screenPosition && textPosition < screenPosition) {
                imageElement.classList.add('visible');
                textElement.classList.add('visible');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the function on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='about-me' className="about-container">
            <div className='about-header'>
              <h2><span><i class="fa-regular fa-address-card"></i></span><span>About Me</span></h2>
            </div>
            <div className='content'>
                <div ref={imageRef} className="about-image">
                    <img src="./assets/images/about.jpeg" alt="Profile" />
                </div>
                <div ref={textRef} className="about-text">
                    <p>
                        I am Sai Ganesh Gupta Athmuri 👋. I am a student of Artificial Intelligence and Data Science Department 🎓, currently maintaining a CGPA of 9.5 📚. I am good at frontend libraries like React ⚛️ and have a good knowledge in HTML, CSS, and JavaScript 🌐, so I can do magic in frontend applications ✨. I am fluent in programming languages like Java ☕ and Python 🐍 and have a little bit of knowledge in C programming 💻. I am very good at DSA, having solved 850+ problems on LeetCode and GeeksforGeeks 🏆. I am interested in domains like web development 🌍, machine learning 🤖, and data science 📊. I am also good at backend technologies like Node.js, MongoDB, and Express 🛠️. Looking forward to sharing my insights on the above-mentioned social media networks 🌐.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
