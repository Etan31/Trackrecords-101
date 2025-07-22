import OpenMenuButton from './../components/OpenMenuButton';

function Dashboard({ isNavOpen, toggleNav }) {
  return (
    <section id="dashboard">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <h1>Dashboard Content</h1>
    </section>
  );
}

export default Dashboard;
