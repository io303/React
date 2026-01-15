import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const[length,setLength]=useState(8)
const[numberAllwoed,setNumberAllowed]=useState(false)
const[charAllowed,setCharAllowed]=useState(false)
const[password,setPassword]=useState("")
// const passwordGenerator=()=>{}
 
//use ref
const passwordRef=useRef(null)



const passwordGenerator=useCallback(()=>{
  let pas=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllwoed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*()?/"
 for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()*str.length+1)
  pas+=str.charAt(char)
 }
setPassword(pas)

},[length,numberAllwoed,charAllowed,setPassword])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllwoed,charAllowed,passwordGenerator])

const copyPasswordToClipboard=useCallback(()=>{
 passwordRef.current?.select();
 passwordRef.current?.setSelectionRange(0, 101); // For mobile devices

  window.navigator.clipboard.writeText(password)
}, [password]) 

  return (
   

 <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button 
        type="button"
        onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>

    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" 
        min={8}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label >Length:{length}</label>

    </div>
     <div className="flex items-center gap-x-1"> 
        <input type="checkbox"
        defaultChecked={numberAllwoed}
        id='numberInput'
        onchange={()=>{setNumberAllowed((prev)=>!prev);

        }}
        />
        <label htmlFor='numberInput'>Include Numbers</label>
        </div>
 <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

  </div>
  </div>
   
  )
}

export default App
