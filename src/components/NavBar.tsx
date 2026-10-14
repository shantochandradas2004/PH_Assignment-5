import logo from "../assets/logo-text.png"
import SignBtn from "./SignBtn"
const NavBar = () => {
  return (
   <>
    <div className="continer m-auto  flex justify-between mt-10 sticky top-0 z-50 bg-white">
      <img src={logo} alt="" />
      <ul className="flex gap-8 text-10">
        <li  className="text-pink-500 font-bold cursor-pointer">Home</li>
        <li className=" font-bold cursor-pointer">Technologies</li>
        <li className=" font-bold cursor-pointer">Projects</li>
        <li className=" font-bold cursor-pointer">About</li>
        <li className=" font-bold cursor-pointer">Contact</li>
      </ul>
     <SignBtn/>
    </div>
   
   </>
  )
}

export default NavBar
