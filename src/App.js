import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Calculator from './components/calculator';
import AccountState from './context/accounts/AccountState';
import AccountDetail from './components/AccountDetail';


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
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </div>
        </Router>
      </AccountState>
    </>
  );
}

export default App;
