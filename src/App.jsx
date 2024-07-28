import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import NavigationBar from './Components/Navbar';
import Land from './Components/Land';
import About from './Components/About';
import Boxes from './Components/Boxes';
import Offerings from './Components/Offerings';
import Footer from './Components/Footer';
import Accordion from './Components/Accordion'
import Mentors from './Components/Mentors';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="mx-5 my-2">
    <NavigationBar/>
    <Land/>
    <div className="my-80">

    <About/>
    </div>
    <Boxes/>
    <Offerings/>
    <Mentors/>
    </div>
    <div className="my-32 mx-32">
      <Accordion/>
    </div>
    <Footer/>
      
    </>
  )
}

export default App
