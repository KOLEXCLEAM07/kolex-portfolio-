import React from 'react'
import  navbar from'../assets/portfolio/navbar.jpg'
import  reactParallax from'../assets/portfolio/reactParallax.jpg'
import  reactSmooth from'../assets/portfolio/reactSmooth.jpg'
import  usestate from'../assets/portfolio/usestate.jpg'
import header from'../assets/portfolio/header.jpg'
import pricingSection  from'../assets/portfolio/pricingSection.png'

const Portfolio = () => {

      const portfolios=[
        {
          id:1,
          src:pricingSection,
        },
        {
          id:2,
          src:navbar,
        },
        {
          id:3,
          src:usestate,
        },
        {
          id:4,
          src:reactSmooth,
        },
        {
          id:5,
          src:reactParallax,
        },
        {
          id:6,
          src:header,
        }
      ]
      return (
        <div
          name='portfolio'
          className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white overflow-hidden"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src }) => (
                <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  
                </div> 
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Portfolio;
    