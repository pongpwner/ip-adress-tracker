import SearchBar from "./components/search-bar/search-bar.component";
import Result from "./components/result/result.component";
import "./App.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const GEO_API = {
    key: "at_Fxgi57nTte7k4eYDuEuw6vdlmLSBi",
    base: "https://geo.ipify.org/api/v2/country,city?",
  };

  const onSubmit = () => {
    fetch(`${GEO_API.base}apiKey=${GEO_API.key}&ipAddress=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIp(data.ip);
        setLocation(
          `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
        );
        setTimezone(`UTC${data.location.timezone}`);
        setIsp(data.isp);
      })
      .catch((error) => {
        console.log("invalid ip");
        setIp("");
        setLocation("");
        setTimezone("");
        setIsp("");
      });
  };
  return (
    <div className="App">
      <h1>IP Adress Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} onSubmit={onSubmit} />
      <Result ip={ip} location={location} timezone={timezone} isp={isp} />
    </div>
  );
}

export default App;
