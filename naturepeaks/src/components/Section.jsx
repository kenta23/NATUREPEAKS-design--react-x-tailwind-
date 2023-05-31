import React from 'react'
import image from '../assets/right content picture.png'
const Section = () => {
  return (
    <div className='sm:px-[160px] w-screen px-[100px] py-[50px] sm:py-[100px]'>
        <div className='p-5 px-2 sm:p-1 md:px-5 flex flex-col gap-7 sm:flex-row items-center align-middle justify-evenly'>
            <div className='flex flex-col gap-4 w-full max-w-full sm:mr-8'>
                <h1 className='leading-[25px] font-[400] sm:text-[30px] md:text-[35px] text-[25px] tracking-[0.08em] '>NATUREPEAKS</h1>
                <p className='font-light text-[15px] sm:text-[15px] lg:text-[20px]'>Allow us to share your amazing shots of beautiful natures, and let the world witness your amazing photographic skills and to inspire others.</p>
            </div>

            <div className='w-full '>
                <img src={image} className='w-full max-w-max sm:max-w-sm h-auto object-cover'  alt="" />
            </div>

         </div>
    </div>
  )
}

export default Section