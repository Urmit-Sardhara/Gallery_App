import axios from "axios"

function App() {
  const getData= async()=>{
  const respones = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
  console.log(respones);
  
    
  }
  return (
    <div className="bg-black h-screen p-4 text-white">

      <button
       className=" bg-green-400 active:scale-95 mb-3 p-2 rounded"
       onClick={getData}
       >click me
      </button>
      
    </div>
  )
}

export default App