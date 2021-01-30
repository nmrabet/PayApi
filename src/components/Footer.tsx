import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Logo2 from "../assets/logo-white.svg";

export default function Footer() {
  return (
    <div>
      <div>
        <h2>Ready to start?</h2>
        <input type='text' placeholder='Enter email address' />
        <button>Schedule a Demo</button>
      </div>
      <div className='bg-third text-white flex flex-col justify-center items-center py-8'>
        <img src={Logo2} alt='logo white' />
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='flex space-x-4'>
          <AiFillFacebook />
          <FaTwitter />
          <ImLinkedin />
        </div>
      </div>
    </div>
  );
}
