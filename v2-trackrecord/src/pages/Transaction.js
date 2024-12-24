import icSearch from './../assets/img/icons/ic-search.svg';
import icFilter from './../assets/img/icons/ic-filter.svg';

import useContainerStyles from './../hook/useContainerStyles';

// import useModal from './../hook/useModal';
import FABMenu from '../components/fabMenu';

import ICAdd from './../assets/img/icons/add.svg';
import './../css/Transaction.css';

function Transaction({menuActive }) {

  const containerStyles = useContainerStyles(menuActive);

  const handleAddBudget = () => {
    alert('Add Budget');
  };

  const handleAddTransaction = () => {
    alert('Add Transaction');
  };

  // const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="container transaction" style={containerStyles}>
      <h2>Transaction</h2>
      <p>View and track your expenses</p>
      <div className="organize-data">
        <div className="searchData-container">
          <input className="seardata" placeholder="Search..." type="text" />
          <img src={icSearch} alt="search icon" />  {/* icon */}
        </div>
        <div className="filterData-container">
          <input className="filterData" type="text" />  {/* dropdown categories */}
          <button>Add filter <img src={icFilter} alt="filter icon" /> </button>
        </div>
        <div className="exportData-container">
          <select className='exportTransaction' name="export" id="export-transaction">
            <option>Export transaction (CSV)</option>
            <option>Export transaction (PDF)</option>
          </select>
        </div>
      </div>
      <div className="transactionTable-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date</th>
              <th>Repeat Interval</th>
              <th>Next Occurrence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>
                <div className="category-tag">Monthly</div>
              </td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>
                <div className="category-tag">Yearly</div>
              </td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>
                <div className="category-tag">Daily</div>
              </td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>
                <div className="category-tag">Weekly</div>
              </td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>
                <div className="category-tag">Monthly</div>
              </td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FABMenu
        onAddBudget={handleAddBudget}
        onAddTransaction={handleAddTransaction}
        buttonIcon={ICAdd}
        buttonLabel="Add record"
      />
    </div>
  );
}

export default Transaction;
