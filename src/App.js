import { useState } from "react";
import "./App.css";

const api = {
  key: "6b5465a02d152cc1b7d945ef8cff5968",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [newcity, setNewCity] = useState("");
  const [cities, setCities] = useState({});

  function SearchCity() {
    fetch(`${api.base}weather?q=${newcity}&units=metric&&APPID=${api.key}`)
      .then((res) => res.json())
      .then((newcity) => setCities(newcity));
  }

  return (
    <div className="App">
      <h1>Weather API</h1>

      <input
        type="text"
        placeholder="Enter the city..."
        value={newcity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button onClick={SearchCity}>Search</button>

      <p>{cities.name}</p>
      <p>{cities.main.temp} degrees</p>
      <p>{cities.weather[0].main}</p>
    </div>
  );
}

export default App;
