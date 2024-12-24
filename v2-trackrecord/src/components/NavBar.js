import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// icons
   import Logo from './../assets/img/ic-trackrecord.png';
   import ICHome from './../assets/img/icons/ic-home.svg';
   import ICTransaction from './../assets/img/icons/ic-transact.svg';
   import ICBudget from './../assets/img/icons/ic-wallet.svg';
   import ICGraph from './../assets/img/icons/ic-graph.svg';
   import ICNotif from './../assets/img/icons/ic-notif.svg';
   import ICHelp from './../assets/img/icons/ic-help.svg';
   import ICSettings from './../assets/img/icons/ic-settings.svg';
   import ICAccount from './../assets/img/icons/ic-account.svg';

function NavBar({ onMenuToggle, menuActive }) {
  const [activeLink, setActiveLink] = useState('/');

  const pages = [
    { name: 'Dashboard', icon: ICHome, route: '/' },
    { name: 'Transaction', icon: ICTransaction, route: '/transaction' },
    { name: 'Budget', icon: ICBudget, route: '/budget' },
    { name: 'Analytics', icon: ICGraph, route: '/analytics' },
    { name: 'Alerts', icon: ICNotif, route: '/alerts' },
  ];

  const otherPages = [
    { name: 'Help', icon: ICHelp, route: '/help' },
    { name: 'Settings', icon: ICSettings, route: '/settings' },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const toggleMenu = () => {
    onMenuToggle(!menuActive);
  };

  return (
    <nav className={`nav ${menuActive ? 'nav-expanded' : 'nav-collapsed'}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Track record logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          {pages.map((page) => (
            <Link to={page.route} key={page.name} onClick={() => handleLinkClick(page.route)}>
              <li className={activeLink === page.route ? 'active' : ''}>
                <div className="ic">
                  <img src={page.icon} alt={`${page.name} icon`} />
                </div>
                <div className="nav-name">{page.name}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="others">
        <ul>
          {otherPages.map((page) => (
            <Link to={page.route} key={page.name}>
              <li>
                <div className="ic">
                  <img src={page.icon} alt={`${page.name} icon`} />
                </div>
                <div className="nav-name">{page.name}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="account">
        <Link to="/login">
          <div className="ic">
            <img src={ICAccount} alt="Account icon" />
          </div>
          <div className="nav-name">Login</div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
