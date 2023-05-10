import React, { useState } from 'react';
import axios from 'axios';
import './css/calculator.css';

function PremiumCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [smoking, setSmoking] = useState(false);
  const [premium, setPremium] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/premiumAmount/calculate-premium", { age, gender, smoking });
      setPremium(response.data.premium);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Smoking:
        <input type="checkbox" checked={smoking} onChange={(e) => setSmoking(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Calculate Premium</button>
      {premium && <div className='premiumAmount'>Premium: {premium}</div>}
    </form>
  );
}

export default PremiumCalculator;