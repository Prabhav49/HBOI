import React, { useState } from 'react';
import './css/calculator.css';

const PremiumCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [premium, setPremium] = useState(0);

  const calculatePremium = () => {
    // Perform the premium calculation logic here
    let basePremium = 1000; // You can set a default base premium value
    let genderFactor = 1;
    let ageFactor = 1;

    if (gender === 'male') {
      genderFactor = 1.2; // You can set different factors based on gender
    } else if (gender === 'female') {
      genderFactor = 0.8;
    }

    if (age >= 18 && age <= 30) {
      ageFactor = 0.9; // You can set different factors based on age range
    } else if (age >= 31 && age <= 40) {
      ageFactor = 1;
    } else if (age >= 41 && age <= 50) {
      ageFactor = 1.2;
    } else if (age >= 51) {
      ageFactor = 1.5;
    }

    const calculatedPremium = basePremium * genderFactor * ageFactor;
    setPremium(calculatedPremium);
  };

  return (
    <div>
      <h2>Premium Calculator</h2>
      <hr />
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)} class="form-select form-select-lg mb-1 mt-2" aria-label=".form-select-lg example">
          <option selected>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
      </div>
      <button onClick={calculatePremium}>Calculate Premium</button>
      <div>
        <h3>Calculated Premium: {premium}</h3>
      </div>

      <div className='advertise'>
      <img src="http://localhost:3000/assets/Frame1.png" width="100%" />
      </div>
    </div>
  );
};

export default PremiumCalculator;
