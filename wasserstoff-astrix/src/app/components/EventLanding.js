"use client";
import React, { useState, useEffect } from "react";
import { SiApacheairflow } from "react-icons/si";

const LandingPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the animation after 3 seconds (adjust the delay as needed)
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <div class="relative h-32 w-32">
      <div class="absolute inset-x-20 top-24 h-16"><SiApacheairflow /> Astrix.</div>
      </div> */}
          <div className="h-screen" style={{ backgroundColor: 'rgb(253, 244, 225)' }}>

    <div className="flex items-center">
      <div className="h-8 w-8 mr-1 flex items-center justify-center mt-6 ml-5">
        <SiApacheairflow className="text-3xl" />
      </div>
      <div className="mt-6 ml-2 text-4xl font-semibold tracking-wide">Astrix.</div>
    </div>

    <div className="mt-20 mx-24">
      <div className="flex justify-center items-center space-x-1 mb-8">
        <p className="text-6xl font-bold">WE</p>
        <img
          src="/assets/concert1.jpeg"
          alt="Image 1"
          className={`block w-40 h-12  transition-transform duration-1000 ease-in-out origin-left ${
            isAnimating ? 'translate-x-10' : ''
          }`}
         
        />
        <div  className={`text-6xl font-semibold ${
          isAnimating ? 'translate-x-10' : ''} 'transition-transform duration-1000 ease-in-out`}
          style={{
            transformOrigin: '100% 50%', 
            backgroundColor: 'rgb(253, 244, 225)',
            zIndex : '99'
          }}
          >
         <p
        className={`text-6xl font-semibold ${
          isAnimating ? 'translate-x-10' : ''} 'transition-transform duration-1000 ease-in-out`}
      >ORGANIZE THE</p>
      </div>
      </div>
      <div className="flex justify-center items-center space-x-1 mb-8">
        <p className="text-6xl font-bold">CONNECTION</p>

        <img
          src="/assets/concert1.jpeg"
          alt="Image 2"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />
      </div>
      <div className="flex justify-center items-center space-x-1 mb-8">
        <img
          src="/assets/concert1.jpeg"
          alt="Image 3"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />

        <p className="text-6xl font-bold">ORGANIZE</p>

        <img
          src="/assets/concert1.jpeg"
          alt="Image 3"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />
        <p className="text-6xl font-bold">Sample Text 1</p>
      </div>
      <div className="flex justify-center items-center space-x-1 mb-8">
        <p className="text-6xl font-bold">ORGANIZE</p>
        <img
          src="/assets/concert1.jpeg"
          alt="Image 3"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />
        <p className="text-6xl font-bold">Sample Text 1</p>

        <img
          src="/assets/concert1.jpeg"
          alt="Image 3"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />
      </div>
      <div className="flex justify-center items-center space-x-1 ">
        <img
          src="/assets/concert1.jpeg"
          alt="Image 3"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />

        <p className="text-6xl font-bold">ORGANIZE</p>

        <img
          src="/assets/concert1.jpeg"
          alt="Image 3"
          className={`inline-block h-12 w-40 ${
            isAnimating ? "translate-x-10" : ""
          } transition-transform duration-1000 ease-in-out`}
        />
        <p className="text-6xl font-bold">Sample Text 1</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
