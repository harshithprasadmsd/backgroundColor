import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div style={{ backgroundColor: color }}>
      <h1>hello</h1>
     </div>
     <div>
      <button style={{backgroundColor :"red"}} onClick={()=>{if(color=="black"){setColor("red")}
    else{
      setColor("black")
    }}}>red</button>
      <br />
      <button style={{backgroundColor :"green"}} onClick={()=>{if(color=="black"){setColor("green")}
    else{
      setColor("black")
    }}}>green</button>
     </div>
    </>
  )
}

export default App
