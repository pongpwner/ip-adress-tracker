import SearchBar from "./components/search-bar/search-bar.component";
import Result from "./components/result/result.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>IP Adress Tracker</h1>
      <SearchBar></SearchBar>
      <Result />
    </div>
  );
}

export default App;
