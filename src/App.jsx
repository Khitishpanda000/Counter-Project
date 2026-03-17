import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    console.log("Clicked",counter);
    setCounter(counter+1)
  }

  const removeValue = () =>{
    console.log("Clicked",counter);
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Chai Aur react</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Increase Count </button>
     <button onClick={removeValue}>decrease Count </button>
    </>
  )
}

export default App
