import type { techType } from "./type";
import { RiDeleteBin6Line } from "react-icons/ri";


const YourStack = ( {item, addedCard,setAddedCard,countStack,setcountStack}:{index:number;item:techType;  setAddedCard:React.Dispatch<React.SetStateAction<techType[]>>;
   countStack:number;
  setcountStack:React.Dispatch<React.SetStateAction<number>>;
 addedCard:techType[]; }) => {
  
       const removeCard = addedCard.filter(deletedItem=>deletedItem.name!==item.name);

const handleClick=()=>{
       setAddedCard(removeCard);
       setcountStack(countStack-1);

}


  return (
    <div className=" flex p-5 justify-between gap-5 items-center h-15 border-2 rounded-2xl border-blue-300">
       
        
         <div className="flex items-center gap-3">
          <img className="h-8" src={item.icon} alt="" /> 
           <div>
            <h2>{item.name}</h2>  
          <p>{item.category}</p>
          </div>
         
         </div>

         <span onClick={handleClick}  className="text-xl hover:border-red-500 hover:bg-red-50 hover:text-red-600 active:scale-95 cursor-pointer ">
        <RiDeleteBin6Line/>
         </span>
  </div>
  )
}

export default YourStack
