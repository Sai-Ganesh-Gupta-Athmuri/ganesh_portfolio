import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className='conc-container'>
      <h1 className="section-heading1 mb50px" id='heading1'>
        <span>
          <i className="far fa-address-card"></i>
        </span>
        <span> Contact </span>
      </h1>
      <div id="contact-container">
        <div id="contact-form-container">
          <form id="contact-form">
            <input id="input-name" name="name" type="text" placeholder="Your Name" />
            <input id="input-email" name="email" type="text" required placeholder="Your Email" />
            <textarea id="input-message" name="message" rows="2" cols="40" placeholder="Message"></textarea>
            <button className="sub-btn" type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div id="my-details-container">
          <h3> Get In touch</h3>
          <p> I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 🌟 If you have a project in mind or just want to connect, feel free to reach out through any of the contact methods below. Let's create something amazing together! 🚀 </p>
          <h3> My Address</h3>
          <div className="my-details-info-container">
            <i className="fas fa-map-marker-alt"></i>
            <span>Kakinada, Andhra Pradesh, India</span>
          </div>
          <div className="my-details-info-container">
            <i className="fas fa-mobile-alt"></i>
            <span>7729912359</span>
          </div>
          <div className="my-details-info-container">
            <i className="far fa-envelope"></i>
            <span>21pa1a5408@vishnu.edu.in</span>
          </div>
        </div>
      </div>
      <div className="text-center social-icons">
        <ul className="no-list-style horizontal-list">
          <li>
            <a href="https://leetcode.com/u/Athmuri_V_V_A_Sai_Ganesh_Gupta/" target="_blank">
            <i class="fa-solid fa-code"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sai-ganesh-gupta-athmuri-81a05423b/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          
          <li>
            <a href="https://github.com/Sai-Ganesh-Gupta-Athmuri" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/profile/21pa1a5408">
              <i class="fa-brands fa-hackerrank"></i>
            </a>
          </li>
          <li>
            <a href="https://www.codechef.com/users/saiganesh_0908" target="_blank">
            <i class="fa-solid fa-code"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
