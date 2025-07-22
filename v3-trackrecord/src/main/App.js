import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Navbar.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Budget from '../pages/Budget';
import Transactions from '../pages/Transactions';
import Notifications from '../pages/Notifications';
import Help from '../pages/Help';
import Settings from '../pages/Settings'; 
import Login from '../pages/Login';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <Router>
      <div className="app">
      <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <main className={isNavOpen ? 'main-with-nav' : 'main-full'}>   

        {/* This will navigate through different pages, when nav links are clicked this will trigger and redirect the right side page to the page. */}
        <Routes>
          <Route path="/Dashboard" element={<Dashboard isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Analytics" element={<Analytics isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Budget" element={<Budget isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Transactions" element={<Transactions isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Notifications" element={<Notifications isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Help" element={<Help isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Settings" element={<Settings isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />
          <Route path="/Login" element={<Login isNavOpen={isNavOpen} toggleNav={toggleNav}/>} />

          {/* Fallback, catch-all rule */}
          <Route
              path="*"
              element={<Dashboard isNavOpen={isNavOpen} toggleNav={toggleNav} />}
            />
          </Routes>

        </main>
      </div>
    </Router>
  );
}

export default App;
