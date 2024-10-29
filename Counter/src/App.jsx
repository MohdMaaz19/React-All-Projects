import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1)

  function decrement(){
      setCount(prevCount=>prevCount-parseInt(inputValue))
  }

  function increment(){
      setCount(prevCount=>prevCount+parseInt(inputValue))
  }

  function handleInputChange(e){
    setInputValue(e.target.value)
  }

  function reset(){
    setCount(0);
    setInputValue(1);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <p>Increment/Decrement by</p>
        <input type="number" value={inputValue} onChange={handleInputChange}/>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
