import './../css/Dashboard.css';
import Logo from './../img/ic-trackrecord.png'

// icons
import ICHome from './../img/icons/ic-home.svg';
import ICTransaction from './../img/icons/ic-transact.svg';
import ICBudget from './../img/icons/ic-wallet.svg';
import ICGraph from './../img/icons/ic-graph.svg';
import ICNotif from './../img/icons/ic-notif.svg';


function App() {
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
              <div className="ic"></div>
              <div className="nav-name">Help</div>
            </li>
            <li>
              <div className="ic"></div>
              <div className="nav-name">Settings</div>
            </li>
          </ul>
        </div>

        {/* TODO: change the text color of the login*/}
        <div className="account">
          <div className="ic"></div>
          <div className="nav-name">Login</div>
        </div>
      </nav>
      <div className="container">
        <header className="heading">
          <h1 >Hello world</h1>
          <p></p>
        </header>
        <div className="total-balance">
          <div className="balance-info"></div>
          <div className="percent-change"></div>
          <div className="ic-balance"></div>
        </div>
        <div className="income">
          <div className="ic-income"></div>
          <div className="percent-changed"></div>
          <div className="income-info"></div>
        </div>
        <div className="financial-insight"></div>
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
