import { projectData } from '../../constants/projectData'
import ProjectItem from '../ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Welcome to my portfolio! Explore some of the projects I've worked on below. Each project showcases my skills in
        ReactJS and Typescript. From a landing page to a Shopee clone, these projects demonstrate my passion for
        front-end development. Feel free to check out the source code on GitHub.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectData.map((project, index) => (
          <ProjectItem key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
        ))}
      </div>
    </div>
  )
}

export default Projects
