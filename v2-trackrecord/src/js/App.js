import React, { useState } from 'react';

// css
  import './../css/Dashboard.css';
  import './../css/Alerts.css';
  import './../css/Analytics.css';
  import './../css/Help.css';
  import './../css/Budget.css';
  import './../css/Login.css';
  import './../css/Settings.css';
// 

import Graph from './../components/Graph';
import FinanceInsight from './../components/FinancialInsight';
import FinancialNotes from './../components/FinancialNotes';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import NavBar from './../components/NavBar';

// icons
  import ICAdd from './../assets/img/icons/add.svg';
  import ICAddWallet from './../assets/img/icons/ic-add-wallet.svg';
  import ICBudget from './../assets/img/icons/ic-wallet.svg';

//

// pages module
  import Transaction from './../pages/Transaction';
  import Budget from './../pages/Budget';
  import Analytics from './../pages/Analytics';
  import Alerts from './../pages/Alerts';
  import Help from './../pages/Help';
  import Settings from './../pages/Settings';
  import Login from './../pages/Login';
// 

// components
import RecentTransaction from './../components/transaction/RecentTransaction';

// 

function App() {
  return (
    <div className="App dashboard">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          {/* Main Dashboard route */}
          <Route path="/" element={<DashboardContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

function DashboardContainer() {
  const location = useLocation(); 

  const balanceData = [10, 25, 90, 45, 0, 79, 60, 85];
  const totalIncomeData = [90, 85, 88, 92, 97, 95, 96, 100];

  // Only render the mainDashboard if we're on the root path
  return (
    <>
      {location.pathname === '/' && (
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
                <p className="balance-num" id="balance-num">₱ 20, 200.75</p>
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
                <p className="income-num" id="income-num">₱ 20, 200.75</p>
              </div>

              <Graph label="Income" dataValues={totalIncomeData} />
            </div>
          </div>

          <div className="financial-insight">
            <FinanceInsight />
            <FinancialNotes />
          </div>

          <RecentTransaction />
          
          <div className="addtransaction">
            Add record
            <img src={ICAdd} alt="Cross icon" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
