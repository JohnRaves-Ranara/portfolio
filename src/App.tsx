// import { useState } from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction';
import './index.css';
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar></Navbar>
        <Introduction></Introduction>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>

  )
}

export default App
