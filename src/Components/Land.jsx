import React from "react";
import image from '../utils/newimage.jpg';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Land() {
  return (
    <div className="container mx-auto px-4">
      <div className="row d-flex mx-1">
        <div className="col-md-6 d-flex flex-column justify-between">
          <div className="mt-5 w-full">
            <p className="text-6xl text-gray-900 dark:text-white">
              <b>Accelerating Growth</b>
            </p>
            <p className="text-6xl text-gray-900 dark:text-white my-4">
              <b>Driving Success</b>
            </p>
            <p className="mt-4 text-gray-500 text-2xl">
              PedalCircle is an offline acceleration cohort by PedalStart, giving handpicked startups access to 24x7 offline innovation hub mentorship from industry experts and up to $250k investment opportunity.
            </p>
            <div className="my-16">
              <Button variant="outline-dark rounded-xl">
                <p className="px-10 text-lg font-bold py-2">Start your journey</p>
              </Button>
            </div>
          </div>
          <div className="box-content h-[8rem] w-full p-4 border-4 bg-[#2e2e2e] rounded-3xl flex flex-col items-center mt-8">
            {/* <FontAwesomeIcon icon="fa-solid fa-chart-simple" /> */}
            <p className="text-gray-100 text-5xl font-semibold text-center">
              Accelerate your venture with PedalCircle
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-center my-5">
          <div className="box-content h-[30rem] w-full max-w-md p-4 border-4 bg-[#2e2e2e] rounded-3xl flex flex-col items-center mb-4">
            <img className="h-4/5 w-full object-cover rounded-3xl" src={image} alt="Description" />
            <h1 className="text-slate-50 my-2 text-3xl mx-2">
              TRAIN ON YOUR OWN TIME
            </h1>
          </div>
          <p className="text-gray-500 text-2xl mt-4 text-center mx-10">
            Join our outcome-driven offline program where startups receive expert support and access to <b>PedalStart's</b> shared resources.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Land;
