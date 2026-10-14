import { IoMdStar } from "react-icons/io";
import type { techType } from "./type"
import { Bounce, toast } from "react-toastify";



interface ItachCard{
  techitem:techType;
  index:number;
  setAddedCard:React.Dispatch<React.SetStateAction<techType[]>>;
  addedCard:techType[];
   countStack:number; 
   setcountStack:React.Dispatch<React.SetStateAction<number>>;
 

}



const TachCard = ({techitem,index,setAddedCard,addedCard,countStack, setcountStack}:ItachCard) => {


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
     const disable = addedCard.some(
       item => item.name === techitem.name
);

   const ClickHandler = ()=>{
        
        setAddedCard([...addedCard, techitem]);

        setcountStack(countStack+1);
        disable;
       toast.success(' Successfully added!', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

transition: Bounce
});
        
    

   }
  

  return (
    <div className={`${disable? 'border-3 border-blue-200 rounded-2xl bg-gray-300':'border-3 border-gray-100 rounded-2xl'}`}>
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
      <h4 className="flex justify-center items-center "> <IoMdStar className="text-amber-400"/>{techitem.rating}</h4></div>


      <button
      onClick={ClickHandler} 
      disabled={disable}
      className="mb-5 ml-8 rounded-2xl mt-3 w-60 h-10 bg-black text-white cursor-pointer">
    { disable?  "Added to Stack":"Add to Stack"}
      </button>



    </div>
  )
}

export default TachCard
