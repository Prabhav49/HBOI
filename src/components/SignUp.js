import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

const SignUp = () => {

  const [credentials, setCredentials] = useState({ firstName:"",lastName:"",email: "", password: "", phone:"",accountDescription:"",branch:"" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const { firstName,lastName,email, password, phone,accountDescription,branch} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({firstName,lastName,email, password, phone,accountDescription,branch})
    });

    const json = await response.json();
    console.log(json);
    
  if (json.success) {
    //redirect
    localStorage.setItem('token', json.authtoken);
    navigate('/');
  } else {
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
          <img src='https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-Punjab-National-Bank-India-Wiki-Logo-profile-600x251.jpg' height="80px" width="220px" alt="Logo" />
          <h4>Sign Up to HBOI</h4>
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
      <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="row">
                    <div className="input-group">
                        <label>First Name</label>
                        <input type="text" id="firstName" name="firstName" onChange={onChange
                        } required/>
                    </div>

                    <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" id="lastName" name="lastName" onChange={onChange
                        }  required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" id="email" name="email" onChange={onChange
                        }  required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" id="password" name="password" onChange={onChange
                        }  required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Mobile No.</label>
                        <input type="number" id="phone" name="phone" onChange={onChange
                        }   required/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>Account Description</label>
                        <input type="text" id="accountDescription" name="accountDescription" onChange={onChange
                        }  required/>
                    </div>

                    <div className="input-group">
                        <label>Branch</label>
                        <input type="text" id="branch" name="branch" onChange={onChange
                        }  required/>
                    </div>
                </div>


                <div className="row">
                    <div className="input-group">
                        <input type="submit" className="signup" id="submit" value="SignUp"/>
                    </div>
                </div>

            </div>
        </form>

      </div>

      <div className='container4'>
      <img src="http://localhost:3000/assets/Frame1.png" width="100%" />
      </div>

      <div className='footer'>
        <p2>&copy; Hamilton Bank of India (APM Id: Serv_Tran_552)</p2>
        <p2>Site best viewed at 1024 x 768 resolution in Microsoft Edge 79+</p2>
      </div>
    </div>
  )
}

export default SignUp
