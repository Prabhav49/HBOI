import React from 'react'
import Marquee from "react-fast-marquee";

const signUp = () => {
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

      <div className='signupForm'>
      <form2 action="">
            <div className="form">
                <div className="row">
                    <div className="input-group">
                        <label>First Name</label>
                        <input type="text" id="Fname" required/>
                    </div>

                    <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" id="Lname" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Email</label>
                        <input2 type="email" id="Email" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" id="Pass" required/>
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input type="password" id="Cpass" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Mobile No.</label>
                        <input type="number" id="Mnumber" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <input type="submit" className="signup" id="submit" value="Request SignUp"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group">
                        <input type="submit" className="signin" id="submit2" value="Direct SignIn"/>
                    </div>
                </div>

            </div>
        </form2>

      </div>

      <div className='container4'>
        <img src='https://www.shutterstock.com/image-vector/web-concept-online-banking-modern-260nw-603967571.jpg' height="222px" width="100%" />
      </div>

      <div className='footer'>
        <p2>&copy; Hamilton Bank of India (APM Id: Serv_Tran_552)</p2>
        <p2>Site best viewed at 1024 x 768 resolution in Microsoft Edge 79+</p2>
      </div>
    </div>
  )
}

export default signUp
