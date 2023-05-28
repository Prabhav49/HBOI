import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import './css/Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
      };

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (

        <nav>

            <div className='flexbetween'>
            <img className='navbarLogo' onClick={handleClick} src='./assets/navbarLogo.png' height="5%" width="10%" alt="Logo" />
            <ul>
                <li><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/signUp" ? "active" : ""}`} to="/signUp">Sign Up</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/accountDetail" ? "active" : ""}`} to="/accountDetail">Account Detail</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/calculator" ? "active" : ""}`} to="/calculator">Calculator</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/BankChatBot" ? "active" : ""}`} to="/BankChatBot">ChatBot</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
