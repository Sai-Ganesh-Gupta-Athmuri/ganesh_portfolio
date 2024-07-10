import React from 'react'
import './MobileNav.css'


const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>  
            <div className='"mobile-menu-container'>
                <img className='logo' src='./assets/images/pp_port.png' alt="" />
                <ul>
                    <li>
                        <a className='menu-item'>About</a>
                    </li>
                    <li>
                        <a className='menu-item'>Education</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Projects</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact Me</a>
                    </li>
                    <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav