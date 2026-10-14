import { useState } from "react"

const SignBtn = () => {
    const [sign,setSign]=useState<boolean>(false)
    const signHandler = ()=>{
          setSign(!sign);
    }
    
  return (
    <div className="flex items-center gap-2">
  <button
    onClick={signHandler} className="rounded-xl border border-gray-300 bg-white px-5 py-2 font-semibold text-gray-800 transition duration-200 hover:border-red-500 hover:bg-red-50 hover:text-red-600 active:scale-95 cursor-pointer"
   
  >
    Sign in
  </button>

  <button
    onClick={signHandler}
    className="rounded-xl bg-red-400 px-5 py-2 font-semibold text-white shadow-sm transition duration-200 hover:bg-red-600 hover:shadow-md active:scale-95 cursor-pointer"
  >
    Sign up
  </button>
</div>
  )
}

export default SignBtn
