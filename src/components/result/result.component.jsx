import React from "react";
import "./result.styles.scss";
import ResultInfo from "../result-info/result-info.component";

const Result = ({ ip, location, timezone, isp }) => (
  <div className="result">
    <ResultInfo title="IP Adress" answer={ip} />
    <ResultInfo title="Location" answer={location} />
    <ResultInfo title="Timezone" answer={timezone} />
    <ResultInfo title="ISP" answer={isp} />
  </div>
);

export default Result;
