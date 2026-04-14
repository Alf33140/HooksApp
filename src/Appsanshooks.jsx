import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ClassState from './Components/ClassState'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     
        <div className="hero">
            <h1 className="text-center">UseState Hooks</h1>
            
            <ClassState /> 
            <hr />
            <FunctionState />
        </div>


      
  )
}

export default App
