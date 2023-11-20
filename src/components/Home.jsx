import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {RiArrowRightSLine} from 'react-icons/ri'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b via-black from-black to-gray-800'>

      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ' > 
        <div className='flex flex-col justify-center h-full'>
            <h2 className=' text-4xl sm:text-7xl max-w[390px]: 
             text-white font-bold'>I am a Frontend  Developer</h2>
            <p className=' text-xl text-gray-500 py-4 max-w-md'>I have a year plus experience in developing and designing websites.
          Currently i love to work on web development 
          using technologies like
          React js, Tailwind,Html, Css, Javascript
          I also have basic knowledge in other programming langauges like
          Bootstrap,Flutter,Jquery,Python      </p>

          <div>
            <button className=' text-xl group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500
              to-blue-500 cursor-pointer'>
            Portfolio
            <span className=' group-hover:rotate-90 duration-300 '>
            <RiArrowRightSLine size={28} className='ml-1 
           hover:ml-[10px]    hover:rounded-md duration-300' />
            </span>
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="Portfolio Owner" className=' rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home