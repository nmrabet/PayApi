import React from "react";
import Menu from "./Menu";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className='flex items-center justify-evenly p-8'>
      <img src={Logo} alt="logo"/>
      <ul className='flex space-x-6'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
      <Menu />
      <button>Schedule a Demo</button>
    </div>
  );
}

