import React from 'react'


const MainHero = () => {
  return (
    <div className='absolute right-[15px] top-[175px] md:top-[270px] lg:top-[290px] px-[20px]'>
        <div className='flex flex-col items-start gap-3 w-auto'>
            <h1 className='uppercase leading-9 text-[27px] md:text-[40px] sm:leading-[25px] font-[400] tracking-[0.05em] shadow-sm md:mb-5'>explore the new world</h1>
            <p className='font-[300] leading-2 md:leading-[35px] lowercase text-[11px] md:text-[18px]'>Lorem ipsum dolor sit amet consectetur. Euismod lorem sed consequat hac magna in. <br/> Lorem ipsum dolor sit amet consectetur.
             Euismod lorem sed consequat
             hac magna in.</p>
            <button className='bg-[#F98D29] hover:bg-[#ffa047] transition ease-in-out duration-150 text-white rounded-xl w-[70px] md:w-[90px] text-sm h-[29px] md:h-[33px]'>Explore</button>
        </div>

    </div>
  )
}

export default MainHero