import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='h-screen bg-gray-300 flex flex-col justify-center items-center '>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6'>Data Fetching Assignment</h1>
  <div className='flex flex-col md:flex-row gap-4'>  
      <Link href="/clientSide-fetching">
          <button className="bg-yellow-600 text-white text-lg md:text-xl px-8 py-3 md:px-10 md:py-4  rounded hover:bg-blue-700  m-2">Client Side Fetching</button>
      </Link>
      <Link href="/serverSide-fetching">
          <button className="bg-yellow-600 text-white text-lg md:text-xl px-8 py-3 md:px-10 md:py-4  rounded hover:bg-blue-700  m-2">Server Side Fetching</button>
      </Link>
    </div>  
    </div>
  )
}

export default Home
