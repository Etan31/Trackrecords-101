import { Link } from 'react-router-dom';

import logo from './../assets/icons/logo.png';
import CloseMenu from './../assets/icons/ic-close-menu-white.svg';
import ic_home from './../assets/icons/ic-home.svg';
import ic_transactions from './../assets/icons/ic-transactions.svg';
import ic_analytics from './../assets/icons/ic-analytics.svg';
import ic_notifications from './../assets/icons/ic-notifications.svg';
import ic_help from './../assets/icons/ic-help.svg';
import ic_settings from './../assets/icons/ic-settings.svg';
import ic_exit from './../assets/icons/ic-exit.svg';

const NavBar = ({ isNavOpen, toggleNav }) => {
  return (
    <nav
      className={`sidenav ${isNavOpen ? 'sidenav-open' : 'sidenav-closed'}`}
      id="side_nav"
    >
      <div className="sidenav-logo">
        <Link to="/dashboard">
          <img className='logo' src={logo} alt="logo"/>
        </Link>
        <button onClick={toggleNav} id="close_menu">
          <img src={CloseMenu} alt="Close side menu" className='btn'/>
        </button>
      </div>
      <div className="sidenav-main">
        <Link to="/dashboard"><img src={ic_home} alt="Home" className='nav-icon'/>Home</Link>
        <Link to="/transactions"><img src={ic_transactions} alt="Transactions" className='nav-icon'/>Transactions</Link>
        <Link to="/analytics"><img src={ic_analytics} alt="Analytics" className='nav-icon'/>Analytics</Link>
        <Link to="/notifications"><img src={ic_notifications} alt="Notifications" className='nav-icon'/>Notifications</Link>
      </div>
      <div className="sidenav-support">
        <Link to="/help"><img src={ic_help} alt="Help" className='nav-icon'/>Help</Link>
        <Link to="/settings"><img src={ic_settings} alt="Settings" className='nav-icon'/>Settings</Link>
      </div>
      <div className="sidenav-bottom">
        <Link to="/login"><img src={ic_exit} alt="Login" className='nav-icon'/>Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
