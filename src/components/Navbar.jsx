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