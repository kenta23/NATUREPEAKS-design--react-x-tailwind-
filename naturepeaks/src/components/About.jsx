import React from 'react'
import LeftImage from '../assets/left image.png'
import Data from './Data'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row w-full gap-5 justify-around items-center px-[15px] sm:px-[20px] py-[30px] sm:py-[50px] lg:px-[60px] lg:py-[60px] '>  
        <div className='w-full content-center'>
          <img className='w-full max-w-max sm:max-w-md h-auto object-cover' src={LeftImage} alt="" />
        </div>


     <div className='flex flex-col  p-[20px] w-auto justify-between h-auto gap-8'>
        <div className=''>
            <h1 className='text-md text-[25px] sm:text-[35px] font-medium'>About us</h1>
            <p className='font-light text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet consectetur. Malesuada odio aliquet enim sed posuere bibendum faucibus aliquet nulla.</p>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-around gap-4'>
            {Data.map((item) => (
                <div key={item.id}> 
                   <img src={item.icon} className='object-cover w-[45px] h-auto' alt="" />
                   <h1 className='font-medium text-[20px] sm:text-[25px] '>{item.title}</h1>
                   <p className='font-light text-[14px] sm:text[18px]'>{item.description}</p>
                </div>
            ))}
        </div>

        </div>
    </div>
  )
}

export default About