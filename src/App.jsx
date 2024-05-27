import React from 'react'
import { Navbar } from './Components/Navbar'

 const App = () => {
  return (
    <>
    <div className='h-[100vh] snap-center' id='Homepage'>
      <Navbar/>
    </div>
    <div className='h-[100vh] snap-center' id='Services'>home</div>
    <div className='h-[100vh] snap-center' id='Portfolio'>contact</div>
    <div className='h-[100vh] snap-center' id='Contact'>protfolio</div>
    <div className='h-[100vh] snap-center' id='About'>App</div>
    </>
  )
}

export default App