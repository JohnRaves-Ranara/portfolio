// import { useState } from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction';
import './index.css';
import Projects from './Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar></Navbar>
        <Introduction></Introduction>
        <Projects></Projects>
      </div>

  )
}

export default App
