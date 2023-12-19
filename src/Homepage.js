import React from 'react'
import img1 from './images/background.jpg'
import { NavLink } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
        
        <img className='block w-full h-screen bg-cover' src={img1} alt='gym'/>
        <div className='absolute pl-4 text-center text-white top-4'>
        <h1 className='text-3xl font-bold'>Flexyble.</h1>

    </div>
    <div className='absolute h-auto text-[60px] text-white top-1/3 w-[500px]  left-40 '>
        <h1>
            STAY STRONG STAY FIT
        </h1>
        <button className='w-[200px] h-[50px] justify-center text-black rounded-md font-bold text-xl bg-white'>
        <NavLink  to='/form' > Be Flexyble </NavLink>
           </button>
    </div>
    </div>
  )
}

export default Homepage