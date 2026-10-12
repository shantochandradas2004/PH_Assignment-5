import { Suspense } from "react"
import Banner from "./Banner"
import NavBar from "./NavBar"
import DataMap from "./DataMap"
import tachPromise from "./DataFetch"

const App = () => {
  return (
    <>
    <div className="px-30">
      <NavBar/>
    <Banner/>
    <Suspense fallback="Loading...">
      <DataMap tachPromise={tachPromise()}></DataMap>
    </Suspense>
    
    </div>
    </>
  )
}

export default App
