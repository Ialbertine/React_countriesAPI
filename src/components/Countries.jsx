import React, { useEffect, useState } from "react";
import { CountriesSection } from "../styled-components/GeneralComponents";
import { getCountries } from "../apis/countries";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const Countries = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  useEffect(() => {
    let pageNumber = Number(searchParams.get("page"));

    setLoading(true);

    getCountries(pageNumber)
      .then((data) => {
        setListOfCountries(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CountriesSection>
      {/* Top part  */}
      <div id="top-section">
        <div>
          <h3>View Countries</h3>
          <p>Page {Number(searchParams.get("page"))} of 5</p>
        </div>
        <select>
          <option value="">Select region</option>
        </select>
      </div>

      {/* List of countries */}
      <div
        id="countries"
        className="flex flex-wrap w-full justify-between md:gap-1"
      >
        {listOfCountries.length > 0 &&
          listOfCountries.map((country, index) => {
            return (
              <div key={index} className="w-5/12 md:w-1/5 mb-5 text-gray-500">
                <img src={country.flags.svg} alt={country.flags.alt} />
                <p>{country.name.common}</p>
                <p>{country.capital}</p>
                <p>{country.population}</p>
                <p>{country.continents}</p>
              </div>
            );
          })}

        {loading && <p>Loading...</p>}

        {!loading && listOfCountries.length === 0 && (
          <p>No countries available</p>
        )}

        {/* Using Ternary operators */}
        {/* {listOfCountries.length > 0
          ? 
            listOfCountries.length > 0 && listOfCountries.map((country, index) => {
              return (
                <div key={index}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </div>
              )
            })
          : <p>No countries available</p>
        } */}
      </div>

      {/* Pagination  */}
      <Pagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </CountriesSection>
  );
};

export default Countries;
