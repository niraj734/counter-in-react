import { useState } from 'react'
import './App.css'

function App() {
  
  const[counter,setCounter]=useState(5)
  const increment=()=>{

   if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  const decrement=()=>{
    
    
      if(counter>0)
      {
        setCounter(counter-1)
      }
    
  }
  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value:{counter}</h2>
      <button id='button1' onClick={increment}>Add value</button>
      <button id='button2'onClick={decrement}>Decrease value</button>
    </>
  )
}

export default App
