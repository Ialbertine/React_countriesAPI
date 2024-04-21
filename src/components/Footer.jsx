import React from "react";
import DesktopLogo from "./icons/DesktopLogo";
import MobileLogo from "./icons/MobileLogo";
import { SectionHolder } from "../styled-components/GeneralComponents";

const Footer = () => {
  return (
    <footer className="py-5 w-full flex bg-slate-200 items-center justify-center">
      <SectionHolder className="gap-4">
        <MobileLogo />
        <DesktopLogo />
        <p className="text-gray-500">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved -
          SheCanCODE Front-end Cohort #10
        </p>
      </SectionHolder>
    </footer>
  );
};

export default Footer;
