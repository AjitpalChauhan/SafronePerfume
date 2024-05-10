import React from 'react'
import desktop from '../assets/desktop.png'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='bg-customGray flex flex-col sm:flex-row items-center justify-center p-4 h-screen'>    
          <img 
          src={desktop} 
          className= "sm:h-fit sm:w-8/12" 
          alt="React logo" />
          <Link to='/content' className='px-6 py-2 bg-buttonyellow text-white font-semibold rounded-md shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Learn more</Link>
      </div>
  )
}

export default Home