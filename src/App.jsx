import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Parallax } from './Components/Parallax'

 const App = () => {
  return (
    <>
    <div className='h-[100vh] snap-center' id='Homepage'>
      <Navbar/>
      <Hero/>
    </div>
    <div className='h-[100vh] snap-center' id='Services'>
      <Parallax type='services' />
    </div>
    <div className='h-[100vh] snap-center' id='Portfolio'>
      <Parallax type='portfolio' />
    </div>
    <div className='h-[100vh] snap-center' id='Contact'>protfolio</div>
    <div className='h-[100vh] snap-center' id='About'>App</div>
    </>
  )
}

export default App