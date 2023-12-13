import { FaCheck } from 'react-icons/fa'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

const Skill = () => {
  return (
    <div id='skill' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>My Skills</h1>
      <div>
        <p className='py-8 font-semibold'>Programming Languages & Tools</p>
        <div className='flex flex-wrap gap-7'>
          <Tippy content='React' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/1126/1126012.png' alt='react' />
          </Tippy>
          <Tippy content='Javascript' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' alt='js' />
          </Tippy>
          <Tippy content='Typescript' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968381.png' alt='ts' />
          </Tippy>
          <Tippy content='PHP' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968332.png' alt='php' />
          </Tippy>
          <Tippy content='MySQL' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968313.png' alt='mysql' />
          </Tippy>
          <Tippy content='HTML' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968267.png' alt='html' />
          </Tippy>
          <Tippy content='CSS' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968242.png' alt='css' />
          </Tippy>
          <Tippy content='Laravel' placement='bottom'>
            <img
              className='w-12 h-12'
              src='https://cdn.iconscout.com/icon/free/png-256/free-laravel-226015.png'
              alt='laravel'
            />
          </Tippy>
          <Tippy content='Github' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' alt='github' />
          </Tippy>
          <Tippy content='Bootstrap' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/5968/5968672.png' alt='bootstrap' />
          </Tippy>
          <Tippy content='TailwindCSS' placement='bottom'>
            <img
              className='w-12 h-12'
              src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg'
              alt='tailwindcss'
            />
          </Tippy>
          <Tippy content='WordPress' placement='bottom'>
            <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/128/59/59137.png' alt='wordpress' />
          </Tippy>
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
