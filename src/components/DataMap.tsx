import { use, useState } from "react"
import type { techType } from "./type"
import TachCard from "./TachCard"
import YourStackMap from "./YourStackMap"

interface tachPromise{
    tachPromise:Promise<techType[]>
}

const DataMap = ({tachPromise}:tachPromise) => {
  const [addedCard,setAddedCard]=useState<techType[]>([]);
    const techData = use(tachPromise)
    console.log(techData)
  return (
    <>
   <main className="flex flex-row">
     <div className="grid grid-cols-3  gap-2 ">
      {
        techData.map((techitem,index)=><TachCard key={index} index={index} techitem ={techitem} addedCard={addedCard} setAddedCard={setAddedCard}/>)
      }
      
    </div>
    <div className="">
     <YourStackMap addedCard={addedCard}/>
    </div>



   </main>
  </>
  )
}

export default DataMap
