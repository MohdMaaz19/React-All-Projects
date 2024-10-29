import { useState } from 'react'
import questions from './data'
import './App.css'

function App() {

  const [toggleDetail, setToggleDetail] = useState([])
  const [multipleAllowed, setMultipleAllowed] = useState(false)

  function handleDetailStatus(id){
    setToggleDetail((previouValue)=>{
      if(previouValue.includes(id)){
        return previouValue.filter((itemId)=>itemId!==id)
      }else{
        return multipleAllowed ? [...previouValue,id] : [id]
      }
    })
  }


  return (
    <>
    <input type="checkbox" name="Multiple allowed" id="" checked={multipleAllowed} onChange={()=>setMultipleAllowed((previousState)=>!previousState)} />
    <span>Multiple Allowed</span>
    {
            questions.map((text)=>( 
              <div>
                <div className='flex justify-between bg-slate-500'>
                  <h1>{text.title}</h1>
                  <button onClick={()=>handleDetailStatus(text.id)} >{toggleDetail.includes(text.id) ? '-' : '+'}
                  </button>
                </div>
                <br />
                {toggleDetail.includes(text.id) && (
                <p>{text.info}</p>
                )}                
              <br />
              </div>
            ))
    }
    </>
  )
}

export default App
