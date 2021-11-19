import React from "react";
import "./result-info.styles.scss";

const ResultInfo = ({ title, answer, last }) => (
  <div className={`result-info ${last ? "last" : ""}`}>
    <h2>{title}</h2>
    <div className="answer">{answer}</div>
  </div>
);

export default ResultInfo;
