// FinancialInsight.js

import IncomeExpenseBarChart from './../components/IncomeExpenseChart';
import ArrowGif from './../assets/img/gif/anim-arrow.gif'

const FinancialInsight = () => {
  return (
    <div className="FinancialInsight-container info-financial">
      <header>
        <div className="left">
          <h2>Financial Insights</h2>
          <div className="ic-info">?</div>
        </div>
        <div id="legend-container" className="chart-legend"></div> {/* Custom legend will appear here */}
        <div className="right">
          <label htmlFor="timeline">View By: </label>
          <select name="timeline" id="timeline">
            <option>This year</option>
            <option>Last year</option>
          </select>
        </div>
      </header>

      <div className="chart-info">
        <div className="chart-detail">
          <p>Click on this chart for more info.</p>
          <div className="ic-arrow">
            <img className="arrow-anim" src={ArrowGif} alt="Animated arrow" />
          </div>
        </div>
        <div className="chart-graph">
          <IncomeExpenseBarChart />
        </div>
      </div>
    </div>
  );
}

export default FinancialInsight;
