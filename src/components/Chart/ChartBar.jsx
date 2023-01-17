import React from "react";

import "./ChartBar.css";

const ChartBar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div
          className="chart-bar_fill"
          style={{ height: ` ${fillHeight}% ` }}
        ></div>
      </div>

      <p className="chart-bar_label">{label}</p>
    </div>
  );
};

export default ChartBar;
