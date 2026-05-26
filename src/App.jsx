import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"

function App() {
  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(2)
 
  
  const getData= async()=>{
  const respones = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
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
        
       <Card elm={elm}/>

      </div>
        
      )
    })
  }
  
  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">

   
      <div className="flex lg:h-[88%] flex-wrap justify-around gap-4 ">
        {PrintData}
      </div>

      <div className="flex justify-center gap-5 mt-5">

       <Button index={index} setindex={setindex} setUserData={setUserData} />
      </div>
    </div>
  )
}

export default App