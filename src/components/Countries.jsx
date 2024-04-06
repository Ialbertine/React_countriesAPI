// Countries.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {countries.map((country) => (
        <div key={country.name.common} className="border p-4 rounded-lg">
          <Link to={`/country/${country.cca3}`}>
            <img
              className="w-20 h-12 object-cover rounded-full mx-auto"
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
            />
            <h2 className="text-lg font-semibold mt-2">
              {country.name.common}
            </h2>
            <p className="mt-1">{country.region}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Countries;
