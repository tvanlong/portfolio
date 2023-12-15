import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Skill />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
