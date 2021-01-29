import React from "react";
import Logo from "../assets/logo.svg";
import Phone from "../assets/illustration-phone-mockup.svg";

export default function Header() {
    return (
        <div className='bg-primary'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row items-center space-x-10 p-12'>
              <img src={Logo} alt='logo' />
              <nav>
                <ul className='font-bold text-sixth flex flex-row space-x-10'>
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
            <div className='flex flex-row items-center pr-12'>
              <button className='border rounded-full bg-fourth text-white py-2 px-4 font-bold'>
                Schedule a Demo
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={Phone} alt='' />
            <div>
              <p className='text-5xl text-center px-24 text-seventh font-semibold'>
                Starts building with your APIs for absolutely free.
              </p>
              <div className='flex flex-row justify-center items-center py-6'>
                <input
                  type='text'
                  placeholder='Enter email address'
                  className='border rounded-full py-2 px-4 font-semibold'
                />
                <button className='border rounded-full bg-fourth text-white py-2 px-4 font-bold'>
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
