import React from 'react';
import { useLocation } from 'react-router-dom';

// Import necessary hooks and components
import useModal from './../hook/useModal';
import Income_Income_Graph from '../components/Income_Income_Graph';
import FinanceInsight from './../components/FinancialInsight';
import FinancialNotes from './../components/FinancialNotes';
import RecentTransaction from './../components/transaction/RecentTransaction';

// Icons
import ICAdd from './../assets/img/icons/add.svg';
import ICAddWallet from './../assets/img/icons/ic-add-wallet.svg';
import ICBudget from './../assets/img/icons/ic-wallet.svg';

// css
import './../css/Dashboard.css';
import './../css/Alerts.css';
import './../css/Analytics.css';
import './../css/Help.css';
import './../css/Budget.css';
import './../css/Login.css';
import './../css/Settings.css';


function DashboardContainer() {
  const location = useLocation();
  const { isOpen, openModal, closeModal } = useModal();

  const balanceData = [10, 25, 90, 45, 0, 79, 60, 85];
  const totalIncomeData = [90, 85, 88, 92, 97, 95, 96, 100];

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

              <Income_Income_Graph label="Balance" dataValues={balanceData} />
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

              <Income_Income_Graph label="Income" dataValues={totalIncomeData} />
            </div>
          </div>

          <div className="financial-insight">
            <FinanceInsight />
            <FinancialNotes />
          </div>

          <RecentTransaction />

          <button id="openModal" className="addtransaction" onClick={openModal}>
            Add record
            <img src={ICAdd} alt="Cross icon" />
          </button>

          <dialog id="modal" className="dialog" open={isOpen}>
            <div className="modal-content">
              <button id="closeModal" className="dialog-close-btn" onClick={closeModal}>
                Close
              </button>
              <p>A pop-up modal component made with the native HTML dialog element with custom styles.</p>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

export default DashboardContainer;
