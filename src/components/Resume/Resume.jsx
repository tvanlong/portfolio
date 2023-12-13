import { IoMdDownload } from 'react-icons/io'

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Resume</h1>
      <div className='flex flex-wrap justify-center'>
        <p className='text-center py-8'>
          Explore my professional journey and qualifications in my detailed resume. Feel free to download it for your
          reference.
        </p>
        <button
          type='button'
          className='flex items-center justify-center text-lg text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2
            transition-colors duration-200 ease-in-out'
        >
          <IoMdDownload size={20} />
          <span className='ml-3'>Download Resume</span>
        </button>
      </div>
    </div>
  )
}

export default Resume
