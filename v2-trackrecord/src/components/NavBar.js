import React from 'react';
import { Link } from 'react-router-dom';

// icons
   import Logo from './../img/ic-trackrecord.png';
   import ICHome from './../img/icons/ic-home.svg';
   import ICTransaction from './../img/icons/ic-transact.svg';
   import ICBudget from './../img/icons/ic-wallet.svg';
   import ICGraph from './../img/icons/ic-graph.svg';
   import ICNotif from './../img/icons/ic-notif.svg';
   import ICHelp from './../img/icons/ic-help.svg';
   import ICSettings from './../img/icons/ic-settings.svg';
   import ICAccount from './../img/icons/ic-account.svg';

//

function NavBar() {
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

  const renderNavItems = (items) =>
    items.map((item) => (
      <li key={item.name}>
        <Link to={item.route}>
          <div className="ic">
            <img src={item.icon} alt={`${item.name} icon`} />
          </div>
          <div className="nav-name">{item.name}</div>
        </Link>
      </li>
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
