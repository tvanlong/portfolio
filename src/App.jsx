import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Skill from './components/Skill'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Skill />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
