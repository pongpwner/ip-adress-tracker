import React from "react";
import "./result.styles.scss";
import ResultInfo from "../result-info/result-info.component";

const Result = () => (
  <div className="result">
    <ResultInfo title="IP Adress" answer="a" />
    <ResultInfo title="Location" answer="a" />
    <ResultInfo title="Timezone" answer="a" />
    <ResultInfo title="ISP" answer="a" />
  </div>
);

export default Result;
