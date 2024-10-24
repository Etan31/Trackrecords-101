import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';

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

//

function NavBar() {

  const [activeLink, setActiveLink] = useState('/')

  const pages = [
    { name: 'Dashboard', icon: ICHome, route: '/' },
    { name: 'Transaction', icon: ICTransaction, route: '/transaction' },
    { name: 'Budget', icon: ICBudget, route: '/budget' },
    { name: 'Analytics', icon: ICGraph, route: '/analytics' },
    { name: 'Alerts', icon: ICNotif, route: '/alerts' }
  ];

  const otherPages = [
    { name: 'Help', icon: ICHelp, route: '/help' },
    { name: 'Settings', icon: ICSettings, route: '/settings' }
  ];

  // to change current navigation active
  const handleLinkClick = (path) => {
    setActiveLink(path);  
  };

  const renderNavItems = (items) =>
    items.map((item) => (
      <Link 
      to={item.route}
      key={item.name}
      onClick={() => handleLinkClick(item.route)}>

        <li className={activeLink === item.route ? 'active' : ''}>
          <div className="ic">
            <img src={item.icon} alt={`${item.name} icon`} />
          </div>
          <div className="nav-name">{item.name}</div>
        </li>
      </Link>
    ));

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Track record logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>{renderNavItems(pages)}</ul>
      </div>
      <div className="others">
        <ul>{renderNavItems(otherPages)}</ul>
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
