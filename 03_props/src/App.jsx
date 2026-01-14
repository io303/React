import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './component/card.jsx'

function App() {
 

  return (
    <>
      <h1 className='bg-green-400'>TAilwind Test</h1>
      <Card />
            <Card username="rahulsingh" btnText="click me" />
      
    </>
  )
}

export default App
