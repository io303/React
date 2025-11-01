import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter] =useState(15)

  // let counter =15;
  const addValue=()=>{
   
    
      // counter+=1;
      setCounter(counter+1)
       console.log(counter);


  }
  const decValue =()=>{
     console.log(counter);
  setCounter(counter-1)
 
  
  }

  return (
    <>
      
      <h1>Rahul Singh</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Decrese value</button>
      
    </>
  )
}

export default App
