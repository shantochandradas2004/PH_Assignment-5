import type { techType } from "./type"
import YourStack from "./YourStack"

interface addedCard{
  addedCard:techType[]
}
const YourStackMap = ({addedCard}:addedCard) => {
  console.log("from Your Stack",addedCard)
  return (
    <div className=" border-2 p-5 ml-3 border-amber-400">
      {
        addedCard.map((item,index)=><YourStack key={index} item={item} index={index} ></YourStack> )
      }
    </div>
  )
}

export default YourStackMap
