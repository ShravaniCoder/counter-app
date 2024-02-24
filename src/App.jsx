
import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  //let counter = 9
  const addValue = () => {
    console.log("clicked", counter)
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    //counter = counter - 1 
    setCounter(counter - 1)
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
