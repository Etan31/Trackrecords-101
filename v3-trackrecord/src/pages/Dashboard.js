import OpemMenu from './../assets/icons/ic-menu-black.svg';

function Dashboard({ isNavOpen, toggleNav }) {
  return (
    <section id="dashboard">
      <header>
        {!isNavOpen && (
          <button onClick={toggleNav} id="open_menu">
            <img src={OpemMenu} alt="Open side menu" />
          </button>
        )}
      </header>
      <h1>Dashboard Content</h1>
    </section>
  );
}

export default Dashboard;
