import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Transaction from './../pages/Transaction';
import Budget from './../pages/Budget';
import Analytics from './../pages/Analytics';
import Alerts from './../pages/Alerts';
import Help from './../pages/Help';
import Settings from './../pages/Settings';
import Login from './../pages/Login';
import DashboardContainer from '../pages/Dashboard';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu2 = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`App ${menuActive ? 'menu-active' : ''}`}>
      {/* <div className="hamburger-menu2" onClick={toggleMenu2}>
        <div className="hamburger-bar2"></div>
        <div className="hamburger-bar2"></div>
        <div className="hamburger-bar2"></div>
      </div> */}

      <div className="App dashboard">
        <Router>
          <div className={`nav ${menuActive ? 'nav-expanded' : 'collapsed'}`}>
            <NavBar onMenuToggle={setMenuActive} menuActive={menuActive} />
          </div>
          <Routes>
            <Route path="/" element={<DashboardContainer menuActive={menuActive} />} />
            <Route path="/transaction" element={<Transaction menuActive={menuActive} />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
