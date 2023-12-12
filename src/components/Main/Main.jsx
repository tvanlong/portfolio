import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

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
              sequence={['Developer', 2000, 'Coder', 2000, 'Tech Enthusiast', 2000]}
              wrapper='div'
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaTwitter className='cursor-pointer' size={20} />
            <FaGithub className='cursor-pointer' size={20} />
            <FaLinkedin className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
