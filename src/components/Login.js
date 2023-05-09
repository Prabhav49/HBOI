import React from 'react'
import './Login.css';
import Marquee from "react-fast-marquee";

const login = () => {
  return (
    <div >

      <div className='container1'>
        <div className='column'>
          <img src='https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-Punjab-National-Bank-India-Wiki-Logo-profile-600x251.jpg' height="80px" width="220px" alt="Logo" />
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
        <form1 action=''>
          <div className='column'>
            <h5>(<p3>CARE:</p3> Email and Password are case sensitive)</h5>
            <label>Email : </label>
            <input type="email" id="Email" required />

            <label>Password : </label>
            <input type="password" id="password" required />
          </div>

          <button type="submit">Submit</button>
        </form1>

        <img src='https://t4.ftcdn.net/jpg/01/94/43/75/360_F_194437567_7XBhvqR0ASvGlZgHxwxJR6wMR7dMfIWc.jpg'/>
      </div>

      <div className='container4'>
        <img src='https://www.shutterstock.com/image-vector/web-concept-online-banking-modern-260nw-603967571.jpg' height="222px" width="100%"/>
      </div>

      <div className='footer'>
        <p2>&copy; Hamilton Bank of India (APM Id: Serv_Tran_552)</p2>
        <p2>Site best viewed at 1024 x 768 resolution in Microsoft Edge 79+</p2>
      </div>
    </div>

  )
}

export default login
