import banner from "../assets/banner-stack.png"
const Banner = () => {
  return (
    <>

    <div className=" flex justify-between items-center mt-20 ">
       
        <div className="">
          <h2 className="text-5xl font-bold ">
Build Your Ideal</h2>
          <h2 className="text-5xl font-bold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent inline-block">

  Development Stack
</h2>
    <p className=" mt-7 mb-13 ">Explore frontend, backend, database, and tooling options, <br />
compare them side by side, and put together the stack that fits your <br />
next project.</p>

    <button className="btn hover:btn-secondary mr-3">Explore Technologies</button>
    <button className="btn hover:btn-secondary " >Learn More</button>

    </div>
     <img src={banner} alt="" />
    </div>
    </>
  )
}

export default Banner
