

function Button(props) {
  return (
    <>
      <button
         className="bg-yellow-500 font-bold text-black text-lg px-4 py-2 rounded active:scale-95 cursor-pointer"
         
         onClick={()=>{
              if(props.index>1){
                props.setindex(props.index-1)
                props.setUserData([])      
              }
        }}
        >Prev</button>

      <h3 className="font-bold">Page {props.index}</h3>
        <button className="bg-yellow-500 font-bold text-black text-lg px-4 py-2 rounded active:scale-95 cursor-pointer"

         onClick={()=>{
           props.setindex(props.index+1)        
           props.setUserData([])       
        }}

        >Next</button> 
    </>
  )
}

export default Button
