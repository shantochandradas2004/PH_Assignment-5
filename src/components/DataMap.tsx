import { use, useState } from "react"
import type { techType } from "./type"
import TachCard from "./TachCard"
import YourStackMap from "./YourStackMap"

interface tachPromise{
    tachPromise:Promise<techType[]>;
   
    
}

const DataMap = ({tachPromise}:tachPromise) => {

  const [addedCard,setAddedCard]=useState<techType[]>([]);
  const [countStack , setcountStack]=useState<number>(Number)



    const techData = use(tachPromise)
    console.log(techData)

  return (
    <>
   <main className="flex flex-row gap-7">
     <div className="grid grid-cols-3  gap-2 ">
      {
        techData.map((techitem,index)=>
        <TachCard 
        key={index} index={index} techitem ={techitem}
        addedCard={addedCard} setAddedCard={setAddedCard}
        countStack={countStack} setcountStack={setcountStack}

        
        
        />)
      }
      
    </div>
    <div className="">
     <YourStackMap
     countStack={countStack} setcountStack={setcountStack}
      addedCard={addedCard} setAddedCard={setAddedCard}
      />
    </div>



   </main>
  </>
  )
}

export default DataMap
