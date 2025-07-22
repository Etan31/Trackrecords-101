import CloseMenu from './../assets/icons/ic-close-menu-white.svg';

const NavBar = ({ isNavOpen, toggleNav }) => {
  return (
    <nav
      className={`sidenav ${isNavOpen ? 'sidenav-open' : 'sidenav-closed'}`}
      id="side_nav"
    >
      <div className="sidenav-logo">
        <a href="/dashboard">Logo</a>
        <button onClick={toggleNav} id="close_menu">
          <img src={CloseMenu} alt="Close side menu" />
        </button>
      </div>
      <div className="sidenav-main">
        <a href="/dashboard">Home</a>
        <a href="/transaction">Transaction</a>
        <a href="/analytics">Analytics</a>
        <a href="/notifications">Notifications</a>
      </div>
      <div className="sidenav-support">
        <a href="/help">Help</a>
        <a href="/settings">Settings</a>
      </div>
      <div className="sidenav-bottom">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
