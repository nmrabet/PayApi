import React from "react";
import Menu from "./Menu";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className='flex items-center justify-evenly p-8'>
      <img src={Logo} alt="logo"/>
      <ul className='invisible md:visible flex space-x-6'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
      <button className='invisible md:visible'>Schedule a Demo</button>
      <Menu className='md:invisible'/>
    </div>
  );
}

