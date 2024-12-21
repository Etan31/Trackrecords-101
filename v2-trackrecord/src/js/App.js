import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar'
import Transaction from './../pages/Transaction';
import Budget from './../pages/Budget';
import Analytics from './../pages/Analytics';
import Alerts from './../pages/Alerts';
import Help from './../pages/Help';
import Settings from './../pages/Settings';
import Login from './../pages/Login';
import DashboardContainer from '../pages/Dashboard';


function App() {
  return (
    <div className="App dashboard">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashboardContainer />} /> {/* Main Dashboard */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;