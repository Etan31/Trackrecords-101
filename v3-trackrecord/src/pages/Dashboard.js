import OpenMenuButton from './../components/OpenMenuButton';
import './../styles/Dashboard.css';

function Dashboard({ isNavOpen, toggleNav }) {
  return (
    <section id="dashboard">
      <header className={isNavOpen ? 'header-open' : ''}>
        <div className='btn menu-btn'>
          <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
        </div>
        <div class="heading-text">
          <h1>Good Morning, <span>Tristan</span> </h1> 
          <p>Welcome to you financial insights.</p>
        </div>

        <section className='level level1'>
          <div class="panel total-balance">
            <div class="left">
              {/* <img src="" alt="wallet logo"/> */}
              <p>Total balance</p>
              <p>$123,456.00</p>
            </div>
            <div class="right">
              <div class="daily-change">
                {/* <img src="" alt="indicator icon"/> */}
                <p>5%</p>
              </div>
              <div class="graph">
              </div>
            </div>

          </div>
          <div class="panel total-income">
            <div class="left">
              {/* <img src="" alt="wallet logo"/> */}
              <p>Total Income</p>
              <p>$20,491.00</p>
            </div>
            <div class="right">
              <div class="daily-change">
                {/* <img src="" alt="indicator icon"/> */}
                <p>5%</p>
              </div>
              <div class="graph">
              </div>
            </div>
          </div>
        </section>

        <section className='level level2'>
          <div class="panel finanicial-insights"></div>
          <div class="panel notes"></div>
        </section>

        <section className='level level3'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rent</td>
                <td>31 May 2024 2:20 PM</td>
                <td>&#8369;1,500</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>31 May 2024 2:20 PM</td>
                <td>&#8369;1,500</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>31 May 2024 2:20 PM</td>
                <td>&#8369;1,500</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>31 May 2024 2:20 PM</td>
                <td>&#8369;1,500</td>
              </tr>
            </tbody>
          </table>

        </section>
        <button>
          {/* <img src="" alt="Add transaction"/> */}
          Add Transaction
        </button>
      </header>

    </section>
  );
}

export default Dashboard;
