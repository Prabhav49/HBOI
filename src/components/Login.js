import React, { useState } from 'react'
import './css/Login.css';
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../helper';

const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log('SUbmitted');
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);
    if(json.success){
      //redirect
      localStorage.setItem('token',json.authtoken);
      navigate('/accountDetail');
    }
    else{
      alert("Invalid");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div >

      <div className='container1'>
        <div className='column'>
        <img className='signUpLogo' src='./assets/navbarLogo.png' alt="Logo" />
          <h4>Login to HBOI</h4>
        </div>
        <div className='column'>
          <heading>Hamilton Bank of India</heading>
          <h4>Welcome to personal Banking</h4>
        </div>
      </div>

      <div className='container2'>
        <Marquee>Dear Customer, Mandatory Login and Profile Password change introduced for added security.</Marquee>
      </div>

      <div className='container3'>
        <form action='post' onSubmit={handleSubmit}>
          <div className='column'>
            <h5>(<p3>CARE:</p3> Email and Password are case sensitive)</h5>
            <label>Email : </label>
            <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" required />

            <label>Password : </label>
            <input type="password" id="password" value={credentials.password} onChange={onChange} name="password" required />
          </div>

          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
        <img className="beSafe" src='./assets/frame2.png' alt='Be Safe' height="100%" width="50%" />
      </div>

      <div className='container4'>
      <img src="./assets/Frame1.png" width="100%" alt='Information' />
      </div>

      <div className='footer'>
        <p2>&copy; Hamilton Bank of India (APM Id: Serv_Tran_552)</p2>
        <p2>Site best viewed at 1024 x 768 resolution in Microsoft Edge 79+</p2>
      </div>
    </div>

  )
}

export default Login
