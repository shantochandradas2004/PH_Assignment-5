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
    <p className=" mt-7 mb-13 font-sans">Explore frontend, backend, database, and tooling options, <br />
compare them side by side, and put together the stack that fits your <br />
next project.</p>

    <div className="flex items-center gap-2">
      <button className="btn bg-linear-to-r from-red-500 to-blue-500 text-white mr-3">Explore Technologies</button>

    <button  className="rounded border border-gray-300 bg-white px-10 py-1.5 font-semibold text-gray-800 transition duration-200
     hover:border-red-500 hover:bg-red-50 hover:text-red-600 active:scale-95 cursor-pointer" >Learn More</button>
    </div>

    </div>
     <img src={banner} alt="" />
    </div>
    </>
  )
}

export default Banner
