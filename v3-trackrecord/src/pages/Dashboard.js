import OpenMenuButton from './../components/OpenMenuButton';
import './../styles/Dashboard.css';
import wallet_1 from './../assets/icons/ic-balance-wallet.svg'
import wallet_2 from './../assets/icons/ic-income-wallet.svg'
import arrow from './../assets/icons/ic-arrow.svg'

function Dashboard({ isNavOpen, toggleNav }) {
  return (
    <section id="dashboard">
      <header className={isNavOpen ? 'header-open' : ''}>
        <div className='btn menu-btn'>
          <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
        <div className="heading-text">
          <h1>Good Morning, <span>Tristan</span> </h1>
          <p>Welcome to you financial insights.</p>
        </div>
      </header>

      <section className='level level1'>
        <div className="panel total-balance">
          <div className="left">
            <img src={wallet_1} alt="wallet logo"/>
            <h2>Total balance</h2>
            <p>$123,456.00</p>
          </div>
          <div className="right">
            <div className="daily-change">
              <img src={arrow} alt="indicator icon"/>
              <p>5%</p>
            </div>
            <div className="graph">
            </div>
          </div>

        </div>
        <div className="panel total-income">
          <div className="left">
            <img src={wallet_2} alt="wallet logo"/>
            <h2>Total Income</h2>
            <p>$20,491.00</p>
          </div>
          <div className="right">
            <div className="daily-change">
              <img src={arrow} alt="indicator icon"/>
              <p>5%</p>
            </div>
            <div className="graph">
            </div>
          </div>
        </div>
      </section>

      <section className='level level2'>
        <h2 className="panel financial-insights">This area is financial</h2>
        <h2 className="panel notes highlight">
          This area is for the notes
        </h2>
      </section>

      <section className='level level3 panel'>
        <header className='level3-header'>
          <h2>Recent Transaction</h2>
          <div>
            <p>View all</p>
            {/* <img src="" alt="logo"/> */}
          </div>
        </header>
        <table>
          <title>Recent transaction</title>
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


    </section>
  );
}

export default Dashboard;
