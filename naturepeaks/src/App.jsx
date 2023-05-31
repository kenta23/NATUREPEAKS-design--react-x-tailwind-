import React from 'react'
import background from '../src/assets/background.jpg'
import Navbar from './components/Navbar'
import MainHero from './components/MainHero'
import Section from './components/Section'
import About from './components/About'
import Info from './components/Info'


const App = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <img className='h-[100vh] w-screen object-cover bg-center' src={background} alt="" />
       <Navbar />
       <MainHero />
       <Section />
       <About />
       <Info />
    </div>
  )
}

export default App