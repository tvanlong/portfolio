import { TypeAnimation } from 'react-type-animation'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left'
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Long Zannn</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-900'>
            I'm a
            <TypeAnimation
              sequence={['Front-End Developer', 2000, 'Programmer', 2000, 'Tech Enthusiast', 2000]}
              wrapper='div'
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://www.facebook.com/LongZannn1107'>
              <FaFacebook
                size={25}
                className='hover:scale-110 
                transform transition duration-500 ease-in-out
                hover:text-blue-700'
              />
            </a>
            <a href='https://twitter.com/Longzannn'>
              <FaTwitter
                size={25}
                className='hover:scale-110
                transform transition duration-500 ease-in-out
                hover:text-[#2eaaf0]'
              />
            </a>
            <a href='https://github.com/tvanlong'>
              <FaGithub
                size={25}
                className='hover:scale-110
                transform transition duration-500 ease-in-out
              hover:text-black'
              />
            </a>
            <a href='https://www.linkedin.com/in/v%C4%83n-long-622b3729b/'>
              <FaLinkedin
                size={25}
                className='hover:scale-110 
                transform transition duration-500 ease-in-out
                hover:text-blue-700'
              />
            </a>
            <a href='https://www.instagram.com/_longzannn703/'>
              <FaInstagram
                size={25}
                className='hover:scale-110
                transform transition duration-500 ease-in-out
              hover:text-[#bd2163]'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
