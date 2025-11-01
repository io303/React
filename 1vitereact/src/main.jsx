import React from 'react'
import { createRoot } from 'react-dom/client'

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'click me visit google',




)
createRoot(document.getElementById('root')).render(
  
   reactElement
  
)

