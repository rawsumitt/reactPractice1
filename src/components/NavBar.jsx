import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-16 fixed w-full">
      <div className="w-24">
        <img className="cover hover:cursor-pointer" src={logo} alt="" />
      </div>
      <div className=" flex items-center">
        <ul className="flex gap-7 font-semibold hover:cursor-pointer">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <Button title="Login" />
    </nav>
  );
};

export default NavBar;
