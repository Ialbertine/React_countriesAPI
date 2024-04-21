import React, { useEffect, useState } from "react";
import { CountriesSection } from "../styled-components/GeneralComponents";
import { getCountries } from "../apis/countries";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";


const Countries = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [selectedRegion, setSelectedRegion] = useState(""); // State for selected region

  useEffect(() => {
    let pageNumber = Number(searchParams.get("page"));

    setLoading(true);

    getCountries(pageNumber, selectedRegion) // Pass selectedRegion to the API call
      .then((data) => {
        setListOfCountries(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams, selectedRegion]); // Include selectedRegion in dependency array

    const handleRegion = (e) => {
      setLoading(true);
      const region = e.target.value;
      console.log(region);
      if (region !== "All") {
        const fetchSearch = async () => {
          const fetchData = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );
          const response = await fetchData.json().then(setLoading(false));

          if (response.status !== 404) {
            setListOfCountries(response);
          }
        };

        try {
          fetchSearch();
        } catch (error) {
          console.log(error);
        }
      } else {
        fetchData();
      }
    };

  return (
    <CountriesSection>
      {/* Top part */}
      <div id="top-section">
        <div>
          <h3>View Countries</h3>
          <p>Page {Number(searchParams.get("page"))} of 5</p>
        </div>
        <select name="region" onChange={handleRegion} value={selectedRegion}>
          <option value="">Regions</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* List of countries */}
      <div
        id="countries"
        className="flex flex-wrap w-full justify-between md:gap-1"
      >
        {listOfCountries.length > 0 &&
          listOfCountries.map((country, index) => (
            <div
              key={index}
              className="w-[48%] md:w-[30%] mb-5 text-gray-900 py-4 px-4 shadow hover:shadow-2xl rounded-2xl"
            >
              <img src={country.flags.svg} alt={country.flags.alt} />
              <div className="py-3 text-center uppercase font-semibold">
                <p>{country.name.common}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital}
                </p>
                <p>
                  <span className="font-medium">Population:</span>{" "}
                  {country.population}
                </p>
                <p>
                  <span className="font-medium">Region:</span>{" "}
                  {country.continents}
                </p>
              </div>
            </div>
          ))}

        {loading && <p>Loading...</p>}

        {!loading && listOfCountries.length === 0 && (
          <p>No countries available</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </CountriesSection>
  );
};

export default Countries;
