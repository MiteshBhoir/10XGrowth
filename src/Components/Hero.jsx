import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row justify-center  w-full mx-auto bg-gradient-to-b from-orange-50'>
      <div className="max-w-4xl flex flex-col md:pt-36 pt-20 px-9 md:px-0 space-y-4 text-center ">
        <h1 className='md:text-home-heading-large text-home-heading-small font-bold max-w-3xl mx-auto   '>Scale your  <span className='text-blue-500'>Business </span><br /> <span className='text-blue-500'>10X Faster</span></h1>
        <p className='md:block max-w-xl mx-auto pt-3'>At 10XGrowth, we empower businesses with cutting-edge strategies, digital marketing, and technology solutions to maximize revenue and impact.</p>
        <div className='text-white flex items-center justify-center gap-6 pt-5 '>
          <button className='bg-green-500 rounded px-4 py-2'>Get Started</button>
          <button className='bg-black rounded px-4 py-2'>Learn more</button>
        </div>
      </div>
      <div>
        <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/business-growth-illustration-download-in-svg-png-gif-file-formats--successful-strategy-motivation-achieving-goals-leadership-success-pack-illustrations-3658876.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
// return (
//   <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
//     <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
//       Empower your future with the courses designed to
//       <span className='text-blue-600'>
//         fit your choice
//       </span>
//       <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
//     <p className='md:block hidden text-gray-500 max-w-2xl mx-auto '>We bring together world-class instructors,interactive content and a supportive community to help you achieve your personal nad professional goals</p>
//     <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together world-class instructors to help you achieve your professional goals</p>
//   </div>
// )
// }