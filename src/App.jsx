import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(2)
 
  
  const getData= async()=>{
  const respones = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  // console.log(respones.data)
  let temp =respones.data
  setUserData(temp)
  //  console.log(temp);
  
    // console.log(typeof UserData);
    
  }
  useEffect(function(){
    getData()
  },[index])

  let PrintData=<h3 className="text-gray-400 absolute top-1/2 left-1/2 ">Loding. . . .</h3>
  if(UserData.length>0){
    PrintData=UserData.map((elm,idx)=>{
      return(
      <div key={idx}>
        
        <a href={elm.url} target="_blank">
          <div  className="h-40 w-44 overflow-hidden rounded-2xl bg-amber-50 "> 
        <img className="h-full w-full object-cover" src={elm.download_url} alt="" /> 
        </div>
        <h2 className="font-bold text-lg">{elm.author}</h2>
        </a>

      </div>
        
      )
    })
  }
  
  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">

   
      <div className="flex h-[87%] flex-wrap justify-evenly gap-4">
        {PrintData}
      </div>
      <div className="flex justify-center gap-5 mt-5">

        <button
         className="bg-yellow-500 font-bold text-black text-lg px-4 py-2 rounded active:scale-95 cursor-pointer"
         
         onClick={()=>{
              if(index>1){
                setindex(index-1)
                setUserData([])       // ye kya kam karta he 
              }
        }}
        >Prev</button>

        <button className="bg-yellow-500 font-bold text-black text-lg px-4 py-2 rounded active:scale-95 cursor-pointer"

         onClick={()=>{
           setindex(index+1)        
           setUserData([])       // ye kya kam karta he 
        }}

        >Next</button>
      </div>
    </div>
  )
}

export default App