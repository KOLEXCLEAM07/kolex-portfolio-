import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';


const Navbar = () => {

    const[nav,setNav]=useState(false);


    const links=[
        {
            id:1,
            links:"home"
        },
        {
            id:2,
            links:"about"
        },
        {
            id:3,
            links:"portfolio"
        },
        {
            id:4,
            links:"experience"
        },
        {
            id:5,
            links:"contact"
        },
    ]
  return (
    <div className=' flex justify-between items-center w-full h-20 top-0   text-white  fixed   px-4 bg-black '>
        <div className=''> 
            <h1 className=' text-5xl font-signature ml-2 text-white'>Kolex</h1>
        </div>
        <ul className=' hidden md:flex'>

            {links.map( ({id,links}) =>(
                  <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 
                  hover:border-b-[3px] border-gray-500 active:border-b-[3px] '> <Link to={links} smooth  duration={500}>{links}</Link></li>
            ))}
        </ul>
        <div onClick={()=> setNav(!nav)} className=' cursor-pointer z-10 pr-4 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
        </div>

        {nav &&(
            
        <ul className=' flex flex-col justify-center items-center absolute top-0
        left-0 w-full  h-screen  bg-gradient-to-b from-black to-gray-400 text-gray-400
        hover:border-b-[3px] border-gray-400 active:border-b-[3px]'>             
            {links.map( ({id,links}) =>(
                  <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl'><Link onClick={() =>setNav(!nav)} to={links} smooth  duration={500}>{links}</Link></li>
            ))}

                    

        </ul>
        )}

      
    </div>
  );
};

export default Navbar