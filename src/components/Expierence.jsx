import React from 'react'
import python from'../assets/python.jpg'
import css from'../assets/css.png'
import html from'../assets/html.png'
import github from'../assets/github.png'
import jquery from'../assets/jquery.png'
import javascript from'../assets/javascript.png'
import react from'../assets/react.png'
import tailwind from'../assets/tailwind.png'
import bootstrap from'../assets/bootstrap.jpg'

const Expierence = () => {


    const languages=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"JAVASCRIPT",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:"REACT",
            style:'shadow-cyan-600'
        },
        {
            id:5,
            src:tailwind,
            title:"TAILWIND",
            style:'shadow-sky-500'
        },
        {
            id:6,
            src:python,
            title:"PYTHON",
            style:'shadow-yellow-400'
        },
        {
            id:7,
            src:jquery,
            title:"jQUERY",
            style:'shadow-blue-700'
        },
        {
            id:8,
            src:github,
            title:"GITHUB",
            style:'shadow-gray-500'
        },
        {
          id:9,
          src:bootstrap,
          title:"BOOTSTRAP",
          style:'shadow-purple-500'
      },
    ]
    return (
      <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black pt-20
       w-full h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {languages.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      );
    };
    
    export default Expierence;
    