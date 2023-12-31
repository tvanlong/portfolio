import { useState } from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiOutlineCheckCircle } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const Sidenav = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu className='absolute top-4 right-4 z-[99] md:hidden' onClick={handleNav} />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            href='#main'
            onClick={handleNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4 w-24'>Home</span>
          </a>
          <a
            href='#education'
            onClick={handleNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <GrProjects size={20} />
            <span className='pl-4 w-24'>Work</span>
          </a>
          <a
            href='#skill'
            onClick={handleNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineCheckCircle size={20} />
            <span className='pl-4 w-24'>Skill</span>
          </a>
          <a
            href='#projects'
            onClick={handleNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4 w-24'>Projects</span>
          </a>
          <a
            href='#resume'
            onClick={handleNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <BsPerson size={20} />
            <span className='pl-4 w-24'>Resume</span>
          </a>
          <a
            href='#contact'
            onClick={handleNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4 w-24'>Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a
            href='#main'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href='#education'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <GrProjects size={20} />
          </a>
          <a
            href='#skill'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineCheckCircle size={20} />
          </a>
          <a
            href='#projects'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href='#resume'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <BsPerson size={20} />
          </a>
          <a
            href='#contact'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
