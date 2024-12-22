function Transaction() {
  return (
    <div className="container transaction">
      <h2>Transaction</h2>
      <p>View and track your expenses</p>
      <div className="organize-data">
        <div class="searchData-container">
          <input className="seardata" placeholder="Search..." type="text" />
          {/* <img src="" alt=""/>  */} {/* icon */}
        </div>
        <div class="filterData-container">
          <input className="filterData" type="text" />  {/* dropdown categories */}
          {/* <img src="" alt=""/>  */} {/* icon */}
          <p>Add filter</p>
        </div>
        <div class="exportData-container">
          <p>Export Data (CSV)</p>
        </div>
      </div>
      <div class="transactionTable-container">
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
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
            <tr>
              <td>Netflix Subscription</td>
              <td>$15.99</td>
              <td>Entertainment</td>
              <td>Monday, June 12, 2023,  2:40PM</td>
              <td>Monthly</td>
              <td>Tuesday, June 12, 2023, 2:40PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;
