import type { techType } from "./type";


const YourStack = ( {item}:{index:number;item:techType;}) => {
  return (
    <div className=" flex p-2 gap-5 items-center h-15 border-2 rounded-2xl border-amber-100">
       
        <img className="h-10" src={item.icon} alt="" /> 
         <div>
           <h2>{item.name}</h2>  
          <p>{item.category}</p>
         </div>
  </div>
  )
}

export default YourStack
