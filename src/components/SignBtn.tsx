import { useState } from "react"

const SignBtn = () => {
    const [sign,setSign]=useState<boolean>(false)
    const signHandler = ()=>{
          setSign(!sign);
    }
    
  return (
     <div>
        <button  onClick={signHandler} className="btn hover:btn-secondary rounded-r-none">Sign in</button>
        <button onClick={signHandler} className= "btn hover:btn-secondary rounded-l-none">Sign up</button>
      </div>
  )
}

export default SignBtn
