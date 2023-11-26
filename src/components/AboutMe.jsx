import React from 'react'

const AboutMe = () => {
  return(
  <div
  name='about'
  className=' h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white pt-20'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 ' >
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500 '>About me</p>
                </div>
                <p className='text-xl mt-20'>I Am a front end developer for about a year plus ,i have experience in java script and have built 
                  a lot of project like to-do-list etc ,am also an expert in the use of html and css and have done several project using the two langauges eg price tag
                  page etc .i also have  experience in ths use of libraries such as react,tailwind,jquery and bootstrap.i have 
                  basic knowledge in the use of python.
                </p>
        </div>
  </div>
  )
}

export default AboutMe