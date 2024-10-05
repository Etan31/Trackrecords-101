import React from 'react';


function RecentTransaction() {
   return ( 
      <div className="recent-transaction">
         <div className="heading-transaction">
            <header>
               <h2>Recent Transaction</h2>
               <div className="ic-info">?</div>
            </header>
         </div>
         <div className="view-all"> View all </div>
         <div className="transaction-table">
            <table>
               <thead>
                  <tr>
                     <td>Name</td>
                     <td>Date</td>
                     <td>Amount</td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Rent</td>
                     <td>31 May 2024 2:20 PM</td>
                     <td>₱ 1,500</td>
                  </tr>
                  <tr>
                     <td>Rent</td>
                     <td>31 May 2024 2:20 PM</td>
                     <td>₱ 1,500</td>
                  </tr>
                  <tr>
                     <td>Rent</td>
                     <td>31 May 2024 2:20 PM</td>
                     <td>₱ 1,500</td>
                  </tr>
                  <tr>
                     <td>Rent</td>
                     <td>31 May 2024 2:20 PM</td>
                     <td>₱ 1,500</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    );
}
 
export default RecentTransaction;