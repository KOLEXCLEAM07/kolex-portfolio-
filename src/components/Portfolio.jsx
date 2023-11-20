import React from 'react'
import  navbar from'../assets/portfolio/navbar.jpg'
import  reactParallax from'../assets/portfolio/reactParallax.jpg'
import  reactSmooth from'../assets/portfolio/reactSmooth.jpg'
import  usestae from'../assets/portfolio/usestate.jpg'
import header from'../assets/portfolio/header.jpg'
import pricingSection  from'../assets/portfolio/pricingSection.png'

const Portfolio = () => {

      const portfolio=[
        {
          id:"1",
          src:pricingSection
        },
        {
          id:"2",
          src:navbar
        },
        {
          id:"3",
          src:usestae
        },
        {
          id:"4",
          src:reactSmooth
        },
        {
          id:"5",
          src:reactParallax
        },
        {
          id:"6",
          src:header
        }
      ]

      
  return (
    <div name="Portfolio" className=' bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen'>

      <div className=' max-w-screen-lg  p-4 mx-auto
       justify-center flex flex-col w-full h-full'>
        <div className=' pb-8'>
          <p className=' text-4xl font bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className=' py-6'>Check out some of my work here</p>
        </div>
        {
          
        portfolio.map(({id, src}) => {
  // your code here
})} 
        <div className=' grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-0'>

          <div className=' shadow-md shadow-gray-600 rounded-lg'>
            <img src={pricingSection} alt="" className=' rounded-md duration-200 hover:scale-125' />
            <div className=' flex items-center  justify-center'>
              <button className=' w-1/2 px-6 py 3  m-8 hover: scale-105'>Demo</button>
              <button className=' w-1/2 px-6 py 3  m-8 hover: scale-105'>Code</button>
            </div>
          </div>
          
        </div>

      </div>


    </div>
  )
}

export default Portfolio