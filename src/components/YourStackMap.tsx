
import type { techType } from "./type"
import YourStack from "./YourStack"

interface addedCard{
  addedCard:techType[];
  countStack:number
}
const YourStackMap = ({addedCard,countStack}:addedCard) => {
  console.log("from Your Stack",addedCard)

  return (
    
   <>
   
    <div className=" w-80 border-3 p-5 flex flex-col gap-2 border-gray-100 rounded-2xl">
      <div className="">
          <h2 className="font-bold text-2xl "> Your Stack</h2>
      <p>{`${countStack===0 ? "No technologies selected yet.": countStack + " Selected technologies" }`}</p>
      </div>
      {
        addedCard.map((item,index)=><YourStack  key={index} item={item} index={index} />)
      }
    </div>
   </>
  )
}

export default YourStackMap
