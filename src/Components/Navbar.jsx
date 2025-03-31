import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex  items-center justify-between py-5 px-16 bg-orange-50 hover:bg-orange-50/20   hover:shadow-lg transition-shadow duration-300 sticky top-0 z-10'>
      {/* Desktop view */}
      <div className="logo">
        <img src="https://www.10xgrowth.com/new%20main%20logo%20Grey.png" alt="" className='w-40  ' />
      </div>
      <div className="">
        <ul className='hidden text-xl md:flex text-center justify-center gap-[4vw] '>
          <li className='hover:text-green-500 hover:cursor-pointer'>Home</li>
          <li className='hover:text-green-500 hover:cursor-pointer'>Services</li>
          <li className='hover:text-green-500 hover:cursor-pointer'>Studio</li>
          <li className='hover:text-green-500 hover:cursor-pointer'>About us</li>
        </ul>
      </div>
      <div className='flex gap-[2vw]'>
        <button className='bg-green-500 px-3 py-1 rounded font-bold text-white hover:bg-green-600'>Sign in</button>
        <button className='bg-blue-500 px-3 py-1 rounded font-bold text-white hover:bg-blue-600'>Schedule a call</button>
      </div>
       
    </nav>
  )
}

export default Navbar
