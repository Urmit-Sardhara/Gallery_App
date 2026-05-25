import axios from "axios"
import { useState } from "react"

function App() {
  const [UserData, setUserData] = useState([])
 
  
  const getData= async()=>{
  const respones = await axios.get("https://picsum.photos/v2/list?page=2&limit=15")
  // console.log(respones.data)
  let temp =respones.data
  setUserData(temp)
  //  console.log(temp);
  
    // console.log(typeof UserData);
    
  }
  let PrintData="No Data found"
  if(UserData.length>0){
    PrintData=UserData.map((elm,idx)=>{
      return(
      <div>
          <div key={idx} className="h-40 w-44 overflow-hidden rounded-2xl bg-amber-50 "> 
        <img className="h-full w-full object-cover" src={elm.download_url} alt="" /> 
        </div>
        <p>{elm.author}</p>
      </div>
        
      )
    })
  }
  
  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">

      <button
       className=" bg-green-400 active:scale-95 mb-3 p-2 rounded"
       onClick={getData}
       >click me
      </button>
      <div className="flex flex-wrap gap-4">
        {PrintData}
      </div>
    </div>
  )
}

export default App