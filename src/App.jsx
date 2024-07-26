import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const country = countries.find((item) => item.value === selectedValue);
    setSelectedCountry(country || null);
  };

  return (
    <div className="App">
      <h1>Dropdown-list</h1>

      <select onChange={handleChange} value={selectedCountry?.value || ""}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select>
          {selectedCountry.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
