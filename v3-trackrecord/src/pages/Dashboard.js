import OpenMenuButton from './../components/OpenMenuButton';

function Dashboard({ isNavOpen, toggleNav }) {
  return (
    <section id="dashboard">
      <header>
        <div>
          <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
        </div>
        <div class="heading-text">
          <h1>Good Morning, <span>Tristan</span> </h1> 
          <p>Welcome to you financial insights.</p>
        </div>
      </header>
    </section>
  );
}

export default Dashboard;
