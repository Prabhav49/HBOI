import React from 'react';
import './css/home.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../helper';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className='homeContainer'>
      <img className='logoImg' src={"./assets/HBPOI1.png"} />
      <div className='container1'>
        <button type="submit" id='bt1' onClick={handleClick}>Continue to Login</button>
      </div>
    </div>
  );
};

export default Home;
