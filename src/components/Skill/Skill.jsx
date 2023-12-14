import { FaCheck } from 'react-icons/fa'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import { iconData } from '../../constants/iconData'

const Skill = () => {
  return (
    <div id='skill' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>My Skills</h1>
      <div>
        <p className='py-8 font-semibold'>Programming Languages & Tools</p>
        <div className='flex flex-wrap gap-7'>
          {iconData.map((icon, index) => (
            <Tippy key={index} content={icon.alt} placement='bottom'>
              <img className='w-12 h-12' src={icon.src} alt={icon.alt} />
            </Tippy>
          ))}
        </div>
      </div>
      <p className='pt-8 pb-4 font-semibold'>Workflow</p>
      <ul className='list-none'>
        <li className='flex items-center gap-4'>
          <FaCheck size={15} />
          <span className='text-[#34495e]'>Git, Github for Teamwork</span>
        </li>
        <li className='flex items-center gap-4'>
          <FaCheck size={15} />
          <span className='text-[#34495e]'>Responsive Web Design</span>
        </li>
        <li className='flex items-center gap-4'>
          <FaCheck size={15} />
          <span className='text-[#34495e]'>Git, Github for Teamwork</span>
        </li>
        <li className='flex items-center gap-4'>
          <FaCheck size={15} color='transparent' />
          <span className='text-[#34495e]'>...</span>
        </li>
        <li className='flex items-center gap-4'>
          <FaCheck size={15} />
          <span className='text-[#34495e] italic'>
            If you do not have an awesome brain, you have to ceaselessly learn!
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Skill
