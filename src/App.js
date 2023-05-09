import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AccountState from './context/accounts/AccountState';


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
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </AccountState>
    </>
  );
}

export default App;
