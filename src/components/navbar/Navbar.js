import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="navbar">
            <div className="container">
                <h1 style={{marginLeft: '1rem', color:'#375BD2'}}>BaNE</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a style={{color:'#375BD2'}} href="/">Service</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color:'#375BD2'}} href="/">Contract</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color:'#375BD2'}} href="/">Community</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color:'#375BD2'}} href="/">Docs</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="/">Apply</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar