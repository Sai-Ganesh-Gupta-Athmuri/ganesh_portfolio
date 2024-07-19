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
                        <a href ='#about-page' className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href ='#about-me' className='menu-item'>About</a>
                    </li>
                    <li>
                        <a href='#education' className='menu-item'>Education</a>
                    </li>
                    <li>
                        <a href='#heading3' className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a href='#experience' className='menu-item'>Experience</a>
                    </li>
                    <li>
                        <a href='#heading' className='menu-item'>Projects</a>
                    </li>
                    <li>
                        <a href='#heading1' className='menu-item'>Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav