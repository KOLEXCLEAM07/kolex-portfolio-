import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill,} from 'react-icons/bs'

const Social = () => {

  const links=[
    {
      id:1, 
      Child:(
        <>
          Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href:'https://Linkedin.com',
      style:" rounded-tr-md"
    },
    {
      id:2, 
      Child:(
        <>
          Github <FaGithub size={30}/>
        </>
      ),
      href:'https://github.com/KOLEXCLEAM07',
    },
    {
      id:3, 
      Child:(
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href:'mailto:quawwiyuogunleye@gmail.com',
    },
    {
      id:4, 
      Child:(
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href:'/ogunleye ABDULQOWIYY.pdf',
      style:" rounded-br-md",
      download:true
    },
  ]



  return <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
                  <ul>
  {links.map(({ id, href, style, Child, download }) => (
    <li
      key={id}
      className={
        "flex justify-between items-center w-40 h-14 px-4  bg-gray-500 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300  " 
       
        +"" +
        style
      }
    >
      <a href={href} className="flex items-center justify-between w-full text-white "
      download={download}
      target='_blank'
      rel="noreferrer"
      >
          {Child} 
      </a>
    </li>
  ))}
</ul>

         </div>
  
}

export default Social