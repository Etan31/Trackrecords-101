import CloseMenu from './../assets/icons/ic-close-menu-white.svg';
import { Link } from 'react-router-dom';

const NavBar = ({ isNavOpen, toggleNav }) => {
  return (
    <nav
      className={`sidenav ${isNavOpen ? 'sidenav-open' : 'sidenav-closed'}`}
      id="side_nav"
    >
      <div className="sidenav-logo">
        <Link to="/dashboard">Logo</Link>
        <button onClick={toggleNav} id="close_menu">
          <img src={CloseMenu} alt="Close side menu" />
        </button>
      </div>
      <div className="sidenav-main">
        <Link to="/dashboard">Home</Link>
        <Link to="/transactions">Transaction</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
      <div className="sidenav-support">
        <Link to="/help">Help</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <div className="sidenav-bottom">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
