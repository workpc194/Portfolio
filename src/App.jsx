import Loader from './components/Loader'
import LnsFile from './LnsFile'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import SVGAnimation from './components/SVGAnimation'
import ProjectInfoCard from './components/ProjectInfoCard'

const App = () => {

  return (
    <div className='bg-black text-white scrollbar-none'>
      <Loader />
      <LnsFile>
        <div className='w-full min-h-screen z-9 overflow-x-hidden scrollbar-none bg-black text-white'>
          <NavBar />
          <Hero />
          <About />
          <Projects />
          <ProjectInfoCard />
          <SVGAnimation />
          <Footer />
        </div>
      </LnsFile>
    </div>
  )
}

export default App