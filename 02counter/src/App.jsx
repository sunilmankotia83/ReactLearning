import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter ] = useState(15)

  //let Counter = 15

  const addValue = () => {
    if (counter < 20)
    {
      counter = counter + 1
      setCounter(counter)
      console.log("Clicked", counter)    
    }
    else{
      console.log("Maximum 20 allowed")    
    }
  }

  const removeValue = () => {
    if (counter > 0)
    {
      counter = counter - 1
      setCounter(counter)
      console.log("Clicked", counter)
    }
    else{
      console.log("Minimum 0 allowed")    
    }
  }

  return (
    <>
    <h1>This is first line</h1>
    
    <button onClick={addValue}>Add Value {counter}</button>
    <h2>Counter Value: {counter}</h2>
    <p>footer :{counter} </p>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
