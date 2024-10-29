import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [num, setNum] = useState(0)
  const [count, setCount] = useState(0)
  const [target, setTarget] = useState('')

  useEffect(()=>{
    const randomNum = Math.floor(Math.random()*100);
    setNum(randomNum)
    console.log(randomNum);
  },[])

  function handleNumberChange(e){
    setCount(parseInt(e.target.value, 10) || 0)
  }

  function handleTargetChange(e){
    const guess = count;
    if(guess===num){
      setTarget('Correct')
    }else if(guess>num){
      setTarget('Higher')
    }else{
      setTarget('Less')
    }
  }

  function handleReset(){
    const randomNum = Math.floor(Math.random() * 100) 
    setNum(randomNum)
    console.log(randomNum)
    setCount('') 
    setTarget('') 
  }

  return (
    <>
      <h1>Guess a number between 0 and 100</h1>
      <input type="number" onChange={handleNumberChange} value={count}/>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleTargetChange} disabled = {target === 'Correct'}>Check</button>
      <span>
          {
            target && (
              <p>
                {
                  target==='Correct' ? 'Your guess is correct' : `Your guess is ${target} than actual number`
                }
              </p>
            )
          }
        </span>
    </>
  )
}

export default App
