import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersGear, faPeopleGroup, faSackDollar, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="text-center p-4">
      <p className='text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
        About
      </p>
      <h1 className='text-black text-5xl sm:text-6xl md:text-8xl font-bold inline-block bg-[#06F4F9] px-4 py-2 rounded'>
        Pedal Circle
      </h1>
     
      <p className='my-10 sm:my-20 md:my-40 text-black font-bold text-2xl sm:text-3xl md:text-4xl'>
        PedalCircle is an innovation hub by PedalStart for selected early-stage startups to accelerate the journey in 4 months and build them seed-stage investable.
      </p>
      
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center mb-10 md:mb-0">
          <div className="text-5xl sm:text-[6rem] mb-4 md:mb-0 md:mr-8">
            <FontAwesomeIcon icon={faPeopleGroup} />
          </div>
          <div className="box-content mx-4 h-auto w-full sm:w-4/5 p-4 border-t-4 border-r-4 border-l-4 border-b-8 md:border-b-[16px] border-black rounded-3xl flex flex-col items-center">
            <p className='text-lg sm:text-3xl md:text-5xl font-bold text-center'>Brainstorming with dedicated EIR</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center mb-10 md:mb-0">
          <div className="text-5xl sm:text-[6rem] mb-4 md:mb-0 md:mr-8">
            <FontAwesomeIcon icon={faUsersGear} />
          </div>
          <div className="box-content h-auto w-full sm:w-4/5 p-4 border-t-4 border-r-4 border-l-4 border-b-8 md:border-b-[16px] border-black rounded-3xl flex flex-col items-center">
            <p className='text-lg sm:text-3xl md:text-5xl font-bold text-center'>24x7 Innovation hub</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center my-10 md:my-40">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center mb-10 md:mb-0">
          <div className="text-5xl sm:text-[6rem] mb-4 md:mb-0 md:mr-8">
            <FontAwesomeIcon icon={faSackDollar} />
          </div>
          <div className="box-content mx-4 h-auto w-full sm:w-4/5 p-4 border-t-4 border-r-4 border-l-4 border-b-8 md:border-b-[16px] border-black rounded-3xl flex flex-col items-center">
            <p className='text-lg sm:text-3xl md:text-4xl font-bold text-center'>Upto $250k investment opportunity</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center mb-10 md:mb-0">
          <div className="text-5xl sm:text-[6rem] mb-4 md:mb-0 md:mr-8">
            <FontAwesomeIcon icon={faUniversalAccess} />
          </div>
          <div className="box-content h-auto w-full sm:w-4/5 p-4 border-t-4 border-r-4 border-l-4 border-b-8 md:border-b-[16px] border-black rounded-3xl flex flex-col items-center">
            <p className='text-lg sm:text-3xl md:text-5xl font-bold text-center'>Free access to shared resources</p>
          </div>
        </div>
      </div>

      <div className="my-20 md:my-80">
        <h1 className='text-black text-5xl sm:text-6xl md:text-7xl font-bold inline-block bg-[#06F4F9] px-4 py-6 rounded'>
          Who are we
        </h1>
        <h2 className='my-10 text-3xl sm:text-4xl md:text-5xl font-bold'>Startup Founder's Community Platform</h2>
        <p className='text-lg sm:text-xl md:text-3xl text-gray-500 font-bold font-sans'>
          We are founder's community and accelerators, for early-stage startups, we are enabling them with - practical experience and execution, and funds from the people of startup ecosystem, like - entrepreneurs, Successful and Angel investors.
        </p>
      </div>
    </div>
  );
}

export default About;
