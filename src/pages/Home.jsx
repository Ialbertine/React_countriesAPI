import React from "react";
import Countries from "../components/Countries";
import { SectionHolder } from "../styled-components/GeneralComponents";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <SectionHolder>
        <Countries />
      </SectionHolder>
    </div>
  );
};

export default Home;
