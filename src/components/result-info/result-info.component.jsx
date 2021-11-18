import React from "react";
import "./result-info.styles.scss";

const ResultInfo = ({ title, answer }) => (
  <div className="result-info">
    <h2>{title}</h2>
    <div className="answer">{answer}</div>
  </div>
);

export default ResultInfo;
