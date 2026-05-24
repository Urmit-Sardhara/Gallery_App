import { useEffect, useState } from "react"


function App() {
  const [name , setname ] = useState("this is the gallary")

  const change=()=>{
   
    setname("btn is click new photo is load ")
    
  }

  useEffect(()=>{
    console.log("efect is the runngin ");
    
  },[name])


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>{
        change()

      }} className="bg-red-500 p-2 ml-4 rounded-2xl ">click</button>
    </div>
  )
}

export default App
