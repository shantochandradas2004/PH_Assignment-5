
import type { techType } from "./type"
import YourStack from "./YourStack"

interface addedCard{
  addedCard:techType[];
  countStack:number;
  setcountStack:React.Dispatch<React.SetStateAction<number>>;
  setAddedCard:React.Dispatch<React.SetStateAction<techType[]>>;



}

const YourStackMap = ({addedCard,setAddedCard,   countStack,setcountStack }:addedCard) => {

  console.log("from Your Stack",addedCard)
  const handleRemove = ()=>{
         setcountStack(countStack=0)
         setAddedCard(addedCard=[])

  }

  return (
    
   <>
   
    <div className=" w-80 border-3 p-5 flex flex-col gap-2 border-gray-100 rounded-2xl">
      <div className="">
          <h2 className="font-bold text-2xl "> Your Stack</h2>
      <p>{countStack === 0 ? "No technologies selected yet." : `${countStack} ${countStack === 1 ? "Selected technology" : "Selected technologies"}`}</p>
      </div>

      {
        addedCard.map((item,index)=>
        <YourStack
         addedCard={addedCard} setAddedCard={setAddedCard}
        key={index} item={item} index={index} 
        setcountStack={setcountStack} countStack={countStack}
          />)
      }


      <button onClick={handleRemove} 
      className="border-2 border-red-500 rounded-xl mt-5 p-1 text-red-500 font-bold cursor-pointer">
      {countStack>0 ? "Remove  All":"Removed All"}
      </button>


    </div>
   </>
  )
}

export default YourStackMap;