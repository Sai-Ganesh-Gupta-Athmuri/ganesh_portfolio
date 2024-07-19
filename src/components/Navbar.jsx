import React, {useState} from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    }
  return (
    <>

        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <p className='p-nav'>Sai Ganesh's Portfolio</p>
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
                        <a href='#skills-content' className='menu-item'>Skills</a> 
                    </li>
                    <li>
                        <a href='#experience' className='menu-item'>Experience</a>
                    </li>
                    <li>
                        <a href='#project-container' className='menu-item'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className='menu-item'>Contact Me</a>
                    </li>
                </ul>
                <button class="menu-btn" onClick={toggleMenu}>
                    <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar