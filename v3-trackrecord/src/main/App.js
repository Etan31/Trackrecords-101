import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Dashboard from '../pages/Dashboard';
import '../styles/Navbar.css'; 

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="app">
      <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />

       <main className={isNavOpen ? 'main-with-nav' : 'main-full'}>
        <Dashboard isNavOpen={isNavOpen} toggleNav={toggleNav} />
      </main>
    </div>
  );
}

export default App;
