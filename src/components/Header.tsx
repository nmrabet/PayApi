import React from "react";
import Phone from "../assets/illustration-phone-mockup.svg";

export default function Header() {
  return (
    <div className='bg-primary'>
      <div className='md:flex flex-col justify-center items-center'>
        <img src={Phone} alt='' />
        <div>
          <p className='text-3xl md:text-5xl text-center md:px-24 font-semibold'>
            Starts building with your APIs for absolutely free.
          </p>
          <div className='flex flex-col space-y-4 md:flex md:flex-row justify-center items-center py-6'>
            <input
              type='text'
              placeholder='Enter email address'
              className='border rounded-full py-2 px-4 font-semibold'
            />
            <button className='md:border rounded-full bg-fourth text-white py-2 px-4 font-bold md:relative right-10'>
              Schedule a Demo
            </button>
            <p className='text-seventh'>
              Have any questions? <span className='font-bold'>Contact Us</span>
            </p>
          </div>
        </div>
      </div>
      <div className='bg-third text-white text-center py-10 space-y-4'>
        <img src='' alt='' />
        <h2 className='text-3xl'>Who we work with</h2>
        <p className='font-semibold'>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className='border rounded-full px-8 py-4'>About Us</button>
      </div>
      <div>
        <img src='' alt='' />
        <h2>Easy to implement</h2>
        <p>
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
      <div>
        <img src='' alt='' />
        <h2>Simple UI & UX</h2>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
      <div>
        <div>
          <img src='' alt='' />
          <h3>Personal Finances</h3>
          <p>
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div>
          <img src='' alt='' />
          <h3>Banking & Coverage</h3>
          <p>
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div>
          <img src='' alt='' />
          <h3>Consumer Payments</h3>
          <p>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
    </div>
  );
}
