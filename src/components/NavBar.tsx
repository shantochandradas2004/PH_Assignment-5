import logo from "../assets/logo-text.png"
import SignBtn from "./SignBtn"
const NavBar = () => {
  return (
   <>
    <div className="continer m-auto  flex justify-between mt-10">
      <img src={logo} alt="" />
      <ul className="flex gap-8 text-10">
        <li className="text-pink-500">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     <SignBtn/>
    </div>
   
   </>
  )
}

export default NavBar
