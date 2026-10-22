import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  
  const addValue = () => {
    setCounter(counter + 1);
    if(counter >= 30){
      setCounter(30);
    }
  }
  const removeValue = () => {
    setCounter(counter - 1);
    if(counter <= 0){
      setCounter(0);
    }
  }
  return (
    <>
      <h1>Chai or Coffee</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>   
    
      <button onClick={removeValue}>Remove value</button>
       </>
  )
}

export default App
