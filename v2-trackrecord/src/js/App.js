import './../css/Dashboard.css';
import Logo from './../img/ic-trackrecord.png';
import Graph from './../components/Graph';
import FinanceInsight from './../components/FinancialInsight'

// icons
  import ICHome from './../img/icons/ic-home.svg';
  import ICTransaction from './../img/icons/ic-transact.svg';
  import ICBudget from './../img/icons/ic-wallet.svg';
  import ICGraph from './../img/icons/ic-graph.svg';
  import ICNotif from './../img/icons/ic-notif.svg';
  import ICHelp from './../img/icons/ic-help.svg';
  import ICSettings from './../img/icons/ic-settings.svg';
  import ICAccount from './../img/icons/ic-account.svg';
  import ICAddWallet from './../img/icons/ic-add-wallet.svg'
//

function App() {

  // Todo: change this values later.
  const balanceData = [10, 25, 90, 45, 0, 79, 60, 85];
  const totalIncomeData = [90, 85, 88, 92, 97, 95, 96, 100];

  return (
    <div className="App dashboard">
      <nav>
        <div className="logo">
          <img src={Logo} alt="Track record logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <div className="ic">
                <img src={ICHome} alt="Dashboard icon" />
              </div>
              <div className="nav-name">Dashboard</div>
            </li>
            <li>
              <div className="ic">
                <img src={ICTransaction} alt="Transaction icon" />
              </div>
              <div className="nav-name">Transaction</div>
            </li>
            <li>
              <div className="ic">
                <img src={ICBudget} alt="Budget icon" />
              </div>
              <div className="nav-name">Budget</div>
            </li>
            <li>
              <div className="ic">
                <img src={ICGraph} alt="Analytics icon" />
              </div>
              <div className="nav-name">Analytics</div>
            </li>
            <li>
              <div className="ic">
                <img src={ICNotif} alt="Alerts icon" />
              </div>
              <div className="nav-name">Alerts</div>
            </li>
          </ul>
        </div>
        <div className="others">
          <ul>
            <li>
              <div className="ic">
                <img src={ICHelp} alt="Help icon" />
              </div>
              <div className="nav-name">Help</div>
            </li>
            <li>
              <div className="ic">
                <img src={ICSettings} alt="Settings icon" />
              </div>
              <div className="nav-name">Settings</div>
            </li>
          </ul>
        </div>
        <div className="account">
          <div className="ic">
            <img src={ICAccount} alt="Account icon" />
          </div>
          <div className="nav-name">Login</div>
        </div>
      </nav>

      <div className="container mainDashboard">
        <header className="heading">
          <h1>Good Morning, <span id="name">Tristan</span></h1>
          <p>Welcome to your financial Insights.</p>
        </header>

        <div className="total-balance">
          <div className="ic-balance">
            <img src={ICBudget} width="30" height="30" alt="Wallet icon" />
          </div>
          <div className="percent-change">+5%</div>
          <div className="balance-info">
            <div className="txt">
              <p>Total Balance:</p>
              <p className="balance-num" id="balance-num"> {/*Unused ID*/}
                ₱ 20, 200.75
              </p>
            </div>

            <Graph label="Balance" dataValues={balanceData} />

          </div>
        </div>

        <div className="total-income">
          <div className="ic-income">
            <img src={ICAddWallet} width="30" height="30" alt="Add wallet icon" />
          </div>
          <div className="percent-changed">-2%</div>
          <div className="income-info">
            <div className="txt">
              <p>Total Income:</p>
              <p className="income-num" id="income-num"> {/*Unused ID*/}
                ₱ 20, 200.75
              </p>
            </div>

            <Graph label="Income" dataValues={totalIncomeData} />

          </div>
        </div>

        {/* financial Insight Information */}
        <div className="financial-insight">
          <FinanceInsight />
        </div>

        {/* History of recent transaction you've made */}
        <div className="recent-transaction">
          <div className="heading-transaction"></div>
          <div className="view-all"></div>
          <div className="transaction-table"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
