import React from "react";
import NavBar from "./NavBar";
import { SectionHolder } from "../styled-components/GeneralComponents";

const Header = () => {
  return (
    <section className="flex flex-col items-center text-white bg-[url('/banner-background.jpg')] bg-no-repeat bg-cover">
      <SectionHolder className="mb-20 flex-col gap-10">
        <NavBar />
        <h1 className="text-4xl font-bold">Country API App</h1>
        <p className="text-xl">
          This is a simple app that allows you to search for countries and
          continents using the API.
        </p>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search country by name"
          className="px-5 py-3 w-full md:w-1/2"
        />
      </SectionHolder>
    </section>
  );
};

export default Header;
