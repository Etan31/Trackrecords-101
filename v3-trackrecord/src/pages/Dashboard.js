import OpenMenuButton from './../components/OpenMenuButton';
import Income_Graph from './../components/Graphs/Income_Graph';
import Balance_Graph from './../components/Graphs/Income_Graph';
import './../styles/Dashboard.css';
import wallet_1 from './../assets/icons/ic-balance-wallet.svg';
import wallet_2 from './../assets/icons/ic-income-wallet.svg';
import arrow from './../assets/icons/ic-arrow.svg';

function Dashboard({ isNavOpen, toggleNav }) {
  // Data arrays to pass as props for the graphs
  const graphLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'];
  const balanceData = [12300, 14000, 12800, 15000, 15300, 15700, 16000, 16300];
  const incomeData = [1800, 2200, 1900, 2100, 2300, 2000, 2250, 2100];

  return (
    <section id="dashboard">
      <header className={isNavOpen ? "header-open" : ""}>
        <div className="btn menu-btn">
          <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
        <div className="heading-text">
          <h1>
            Good Morning, <span>Tristan</span>{" "}
          </h1>
          <p>Welcome to your financial insights.</p>
        </div>
      </header>

      <section className="level level1">
        <div className="panel total-balance">
          <div className="left">
            <img src={wallet_1} alt="wallet logo" />
            <h2>Total balance</h2>
            <p>$123,456.00</p>
          </div>
          <div className="right">
            <div className="daily-change">
              <img src={arrow} alt="indicator icon" />
              <p>5%</p>
            </div>

            <Balance_Graph
              label="Balance Over Time"
              labels={graphLabels}
              dataValues={balanceData}
              isNavOpen={isNavOpen}
            />
          </div>
        </div>

        <div className="panel total-income">
          <div className="left">
            <img src={wallet_2} alt="wallet logo" />
            <h2>Total Income</h2>
            <p>$20,491.00</p>
          </div>
          <div className="right">
            <div className="daily-change">
              <img src={arrow} alt="indicator icon" />
              <p>5%</p>
            </div>

            <Income_Graph
              label="Income Over Time"
              labels={graphLabels}
              dataValues={incomeData}
              isNavOpen={isNavOpen}
            />
          </div>
        </div>
      </section>

      <section className="level level2">
        <h2 className="panel financial-insights">This area is financial</h2>
        <h2 className="panel notes highlight">This area is for the notes</h2>
      </section>

      <section className="level level3 panel">
        <header className="level3-header">
          <h2>Recent Transaction</h2>
          <div>
            <p>View all</p>
          </div>
        </header>
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

      <button>Add Transaction</button>
    </section>
  );
}

export default Dashboard;
