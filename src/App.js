import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AccountState from './context/accounts/AccountState';
import AccountDetail from './components/AccountDetail';
import Alert from './components/Alert';
import PremiumCalculator from './components/calculator';
import BankChatBot from './components/BankChatBot';


function App() {
  return (
    <>
      <AccountState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signUp" element={<SignUp/>} />
              <Route path="/accountDetail" element={<AccountDetail/>} />
              <Route path="/about" element={<About />} />
              <Route path="/calculator" element={<PremiumCalculator />} />
              <Route path="/BankChatBot" element={<BankChatBot />} />
              
            </Routes>
          </div>
        </Router>
      </AccountState>
    </>
  );
}

export default App;
