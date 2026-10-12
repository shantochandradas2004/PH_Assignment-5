import type { techType } from "./type";


const YourStack = ( {item}:{index:number;item:techType}) => {
  return (
    <div>
        <h1>{item.name}</h1>   
        <img src={item.icon} alt="" /> 
  </div>
  )
}

export default YourStack
