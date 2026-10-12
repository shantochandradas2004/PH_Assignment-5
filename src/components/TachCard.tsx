import { IoMdStar } from "react-icons/io";
import type { techType } from "./type"
import { useState } from "react";
interface ItachCard{
  techitem:techType;
  index:number;
  setAddedCard:React.Dispatch<React.SetStateAction<techType[]>>;
  addedCard:techType[]


}

const TachCard = ({techitem,index,setAddedCard,addedCard}:ItachCard) => {
const textColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-pink-500",
  "text-purple-500",
  "text-orange-500",
  "text-indigo-500",
  "text-teal-500",
  "text-cyan-500",
  "text-lime-500",
  "text-emerald-500",
  "text-violet-500",
  "text-fuchsia-500",
  "text-rose-500"
];
const bg = [
  "bg-red-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-pink-50",
  "bg-purple-50",
  "bg-orange-50",
  "bg-indigo-50",
  "bg-teal-50",
  "bg-cyan-50",
  "bg-lime-50",
  "bg-emerald-50",
  "bg-violet-50",
  "bg-fuchsia-50",
  "bg-rose-50"
];
  const [addToStack,setAddToStack]=useState<boolean>(false)
   const ClickHandler = ()=>{
        setAddToStack(true)
        setAddedCard([...addedCard, techitem])
        

   }

  return (
    <div className="border-3 border-gray-100 rounded-2xl">
      <div className="flex justify-between m-5">
        
     
       <img className="w-10" src={techitem.icon} alt="" />
     <button className={`${textColors[index]} flex justify-center items-center px-3 py-  rounded-4xl font-bold ${bg[index]} `}>{techitem.badge}</button>
     
      </div>

       
      <div className="m-5 "> 
        <h2 className="font-bold text-2xl">{techitem.name}</h2>
      <p className="font-semibold">{techitem.description}</p>
      </div>

     
      
     <div className="flex justify-between m-5 border-t border-blue-100 pt-3"> <h3>{techitem.category}</h3>
      <h3>{techitem.difficulty}</h3>
      <h4 className="flex justify-center items-center"> <IoMdStar/>{techitem.rating}</h4></div>


      <button
      onClick={ClickHandler} 
      disabled={addToStack}
      className="mb-5 ml-8 rounded-2xl mt-3 w-90 h-10 bg-black text-white">
    { addToStack?  "Added to Stack":"Add to Stack"}
      </button>



    </div>
  )
}

export default TachCard
