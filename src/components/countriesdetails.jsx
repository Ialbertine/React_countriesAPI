// CountryDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function countriesdetails() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) =>
        console.error("Error fetching country details:", error)
      );
  }, [countryCode]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default countriesdetails;
