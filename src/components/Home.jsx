import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-fit bg-gradient-to-b from-black via-black to-gray-800 pt-20 sm:mt-0" 
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end  Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I have a year plus experience in developing and designing websites.
          Currently i love to work on web development 
          using technologies like
          React js, Tailwind,Html, Css, Javascript
          I also have basic knowledge in other programming languages like
         ,Jquery,Python.    
          </p>
          <div>
             <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
             Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
              </Link> 
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> 
        </div>
      </div>
      
    </div>
  );
};

export default Home;
