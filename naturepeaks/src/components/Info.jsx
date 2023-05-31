import React from 'react'
import LeftImage from '../assets/left image.png'
const Info = () => {
  return (
    <div className='flex p-8 w-full flex-col sm:flex-row gap-7 sm:gap-0 justify-around items-center bg-[#F3E1D0]' >
      
        <div className='flex flex-col gap-1 items-start justify-between'>
            <h1 className='text-[25px] font-normal'>For more Information</h1>
            <p className='font-light text-[15px]'>Lorem ipsum dolor sit amet consectetur. Et in amet aliquam aenean et sit in potenti.</p>
            <button className='bg-[#F98D29] hover:bg-[#ffa047] transition ease-in-out duration-150 mt-4 w-[157px] text-white h-auto p-2 rounded-[12px]'>Click here</button>
        </div>

        <div className=''>
            <img className='rounded-lg w-full object-cover h-auto max-w-[20rem]' src={LeftImage} alt="" />
        </div>   
   </div>
  )
}

export default Info