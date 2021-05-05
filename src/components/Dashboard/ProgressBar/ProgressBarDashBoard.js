import React from "react";
import "./ProgressBarDashBoard.scss";

function ProgressBarDashBoard() {
  return (
    <div>
      <div className="progress">
        <div
          style={{ width: "20%", borderRadius: "3px 0px 0px 3px" }}
          className="progress-bar progress-bar-light-blue"
        >
          <span>20%</span>
        </div>
        <div
          style={{ width: "40%" }}
          className="progress-bar progress-bar-brand-blue"
        >
          <span>40%</span>
        </div>
        <div
          style={{ width: "8%" }}
          className="progress-bar progress-bar-dark-blue"
        >
          <span>8%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarDashBoard;
