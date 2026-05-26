

function Card(props) {
  return (
    <>
         <a href={props.elm.url} target="_blank">
          <div  className="h-40 w-44 overflow-hidden rounded-2xl bg-amber-50 "> 
        <img className="h-full w-full object-cover" src={props.elm.download_url} alt="" /> 
        </div>
        <h2 className="font-bold text-lg">{props.elm.author}</h2>
        </a>

    </>
  )
}

export default Card
