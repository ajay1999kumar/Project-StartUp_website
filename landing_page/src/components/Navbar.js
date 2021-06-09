import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {BiBookReader} from 'react-icons/bi';
import{Button} from './Button';
import './Navbar.css';
import{IconContext} from 'react-icons/lib';
import Dropdown from './Dropdown';


function Navbar() {
    const[ click, setClick]=useState(false);
    const[button,setButton]=useState(true);
    const[dropdown,setDropdown]=useState(false);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const onMouseEnter=()=>{
        if(window.innerWidth < 960){
            setDropdown(true);
        }else{
            setDropdown(true);
        }
    }

    const onMouseLeave=()=>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton(true);
    },[]);


    window.addEventListener('resize',showButton);
    return (
        <IconContext.Provider value={{color:'#fff'}}>
        <div>
            <div>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <BiBookReader className="navbar-icon" />
                            EDVENTURE
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click?<FaTimes/> : <FaBars/>}

                        </div>
                        <ul className={click? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                    About US
                                </Link>
                            </li>
                            <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            >
                                <Link to='/courses' className="nav-links" onClick={closeMobileMenu}>
                                    Courses <i className='fas fa-caret-down'/>
                                </Link>
                                {dropdown && <Dropdown/>}
                            </li>
                            <li className="nav-item">
                                <Link to='/materials' className="nav-links" onClick={closeMobileMenu}>
                                    Free Study Material
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/team' className="nav-links" onClick={closeMobileMenu}>
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/results' className="nav-links" onClick={closeMobileMenu}>
                                    Results
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button?(
                                    <Link to='/sign-up' className="btn-link">
                                        <Button buttonStyle='btn--outline'>
                                            Sign Up

                                        </Button>

                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--mobile'>
                                            Sign Up

                                        </Button>

                                    </Link>

                                )

                                }
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            
        </div>
        </IconContext.Provider>
    )
}

export default Navbar
