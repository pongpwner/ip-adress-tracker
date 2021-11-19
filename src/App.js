import SearchBar from "./components/search-bar/search-bar.component";
import Result from "./components/result/result.component";
import "./App.scss";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function App() {
  const [search, setSearch] = useState("");
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");

  const [position, setPosition] = useState([0, 0]);
  const GEO_API = {
    key: "at_Fxgi57nTte7k4eYDuEuw6vdlmLSBi",
    base: "https://geo.ipify.org/api/v2/country,city?",
  };
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

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
        setPosition([data.location.lat, data.location.lng]);
      })
      .catch((error) => {
        console.log("invalid ip");
        setIp("");
        setLocation("");
        setTimezone("");
        setIsp("");
        setPosition([0, 0]);
      });
  };
  return (
    <div>
      <div className="App">
        <h1>IP Adress Tracker</h1>
        <SearchBar search={search} setSearch={setSearch} onSubmit={onSubmit} />
        <Result ip={ip} location={location} timezone={timezone} isp={isp} />
      </div>
      <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={position} />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
