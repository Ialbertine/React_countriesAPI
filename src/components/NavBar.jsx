import React from "react";
import DesktopLogo from "./icons/DesktopLogo";
import { Link, NavLink } from "react-router-dom";
import MobileLogo from "./icons/MobileLogo";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between py-10 ">
      <Link to="/">
        <DesktopLogo />
        <MobileLogo />
      </Link>
      <NavLink to={"/"} className={"block md:hidden"}>
        <CiMenuFries />
      </NavLink>
      <NavLink to={"/"} className={"hidden md:block"}>
        Countries
      </NavLink>
    </div>
  );
};

export default NavBar;
