import React from 'react'
import './css/home.css';

const home = () => {
  return (

    <div className='homeContainer'>
      <h1>This is home</h1>
      <img className='logoImg' src="http://localhost:3000/assets/HBPOI1.png" />
      <div className='container1'>
        <button type="submit" id='bt1'>Continue to Login</button>
      </div>
    </div>


  )
}

export default home
