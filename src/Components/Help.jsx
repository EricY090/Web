/* eslint-disable no-unused-vars */
import { useState } from "react";
import name from "../Pages/img/Tutorial- Enter Name.png";

const Help = () => {
  return (
    <div className="text-center font-bold text-blue-300 leading-30">
      <h2 className="text-6xl">Tutorial</h2>
      <br />
      <br />
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h6 className="text-4xl">1. Enter Your Name to Get Started!</h6>
          <img
            className="w-full h-auto"
            src="src/Pages/img/help_image1.png"
            alt="First step"
          />
          <br />
          <br />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h6 className="text-4xl">2. Practice and Ace the Tests!</h6>
          <img
            className="w-full h-auto"
            src="src/Pages/img/help_image2.png"
            alt="Second step"
          />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Help;
