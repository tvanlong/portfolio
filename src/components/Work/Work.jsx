import { data } from '../../constants/data'
import WorkItem from '../WorkItem'

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] p-6'>Education & Experience</h1>
      {data.map((item, index) => (
        <WorkItem key={index} data={item} />
      ))}
    </div>
  )
}

export default Work
