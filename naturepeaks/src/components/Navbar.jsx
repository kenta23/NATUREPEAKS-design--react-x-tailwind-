import React from 'react'
import Logo from '../assets/naturepeaks logo.png'
import Person from '../assets/person.png'
import { BiMenu } from 'react-icons/bi'




const Navbar = () => {

    const toggleButton = () => {
        const menu = document.querySelector('.menu');
        const items = document.querySelector('.links');
      
        menu.addEventListener('click', () => {
            if(items.classList.contains('slides')) {
                items.classList.remove('slides')
            }
            else {
                items.classList.add('slides')
            }
        })
      }
      
    const slides = {
        top: '-1000px'
    }
  return (
    <div className='md:px-6 px-2'>
        <nav className='absolute top-2 py-4 px-[30px] flex justify-between items-center w-full '>
              <div className='logo flex flex-row items-center justify-between'>
                <img className='max-w-full h-auto object-cover md:w-[70px] w-[50px] lg:w-[90px]' src={Logo} alt="" />
                <h1 className='font-[400] text-sm sm:text-lg md:text-2xl tracking-[0.08em] uppercase leading-[15px]'>NATUREPEAKS</h1>
              </div>
      
      
     
    <div className='relative flex flex-col items-start justify-between'>
       <BiMenu className='text-[30px] block sm:hidden menu' onClick={toggleButton}/>


      <div className='absolute top-[40px] links transition-all duration-200 ease-in-out slides sm:static sm:top-[0px] sm:flex sm:flex-row-reverse  sm:justify-around sm:items-center'>
        <div className='person mr-5 left-4 sm:static'>
          <img className='max-w-full sm:static h-auto object-cover md:w-[45px] w-[30px] lg:w-[50px]' src={Person} alt="" />
        </div>
       
       <ul className='flex mt-7 sm:mt-0 cursor-pointer text-[10px] sm:items-center sm:text-sm md:text-md lg:text-lg flex-col sm:flex-row mr-20 justify-around items-center sm:w-auto uppercase gap-x-4 md:gap-x-12 h-[25px] tracking-[0.05em] font-light'>
          <li className='hover:text-slate-500 transition-all '>contact us</li>
          <li className='hover:text-slate-500 transition-all'>About us</li>
          <li className='hover:text-slate-500 transition-all'>careers</li>    
       </ul>
       
       </div>
     </div>
      </nav>
    </div>
  )
}

export default Navbar