import footerImg from "../assets/logo-text.png"
const Footer = () => {
  return (
    <>
  <footer>
  <div className="flex justify-between mt-50 mb-30 border-t-2 px-20 border-gray-100 pt-20 ">




  <div className="grid gap-2">
   <img src={footerImg} alt="" />
   <p className="font-sans">Curated tools, technologies, and resources for developers building
modern software.</p>
<ul className="flex gap-5">
<li className="font-bold"><a href="https://github.com/shantochandradas2004">GitHub</a></li>
<li className="font-bold">Twitter</li>
<li className="font-bold"><a href="
https://www.linkedin.com/in/shanto-chandra-das-480754384/?isSelfProfile=true">LinkedIn</a> </li>
</ul>
 </div>


    <div>
    <ul className="grid gap-2">
    <li className="font-bold">PRODUCT</li>
    <li className="font-sans">Home</li>
    <li className="font-sans">Technologies</li>
    <li className="font-sans">Projects</li>
    </ul>
    </div>



     <div>
    <ul className="grid gap-2">
    <li className="font-bold">COMPANY</li>
    <li className="font-sans">About</li>
    <li className="font-sans">Contact</li>
    <li className="font-sans">Careers</li>
    </ul>
    </div>



     <div>
    <ul className="grid gap-2">
    <li className="font-bold">LEGAL</li>
    <li className="font-sans">Privacy Policy</li>
    <li className="font-sans">Terms of Service</li>
    </ul>
    </div>

    

    </div>
    <div className="flex justify-between border-t-2  mx-20 border-gray-100 pt-10 pb-7">
        <p className="font-sans">© 2026 Dev Stack. All rights reserved.</p>

      <ul className="flex gap-10">
      
        <li className="font-sans" >Privacy</li>
        <li className="font-sans">Terms</li>
      </ul>
    </div>

  </footer>
    
    </>
  )
}

export default Footer
