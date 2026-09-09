import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import NavBar from './components/NavBar'
import Loader from './components/Loader'
import LnsFile from './LnsFile'

const App = () => {

  return (
    <div className='bg-black text-white'>
      <Loader />
      <LnsFile>
        <div className='w-full min-h-screen z-9 overflow-x-hidden scrollbar-none bg-black text-white'>
          <NavBar />
          <PageOne />
          <PageTwo />
          <PageThree />
        </div>
      </LnsFile>
    </div>
  )
}

export default App