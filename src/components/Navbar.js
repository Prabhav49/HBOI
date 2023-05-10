import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import './css/Navbar.css';


const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (

        <nav>

            <div className='flexbetween'>
            <img src='https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-Punjab-National-Bank-India-Wiki-Logo-profile-600x251.jpg' height="60px" width="220px" alt="Logo" />
            <ul>
                <li><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/signUp" ? "active" : ""}`} to="/signUp">Sign Up</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
