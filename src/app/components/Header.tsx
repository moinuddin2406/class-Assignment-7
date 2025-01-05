
import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
   <header className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600  text-white '>
    <nav className='container mx-auto flex flex-wrap  justify-between items-center p-4'>
        <h1 className='text-2xl md:text-3xl mb-4 md:mb-0 font-extrabold'>Data Fetching</h1>
        {/* Navigation menu */}
        <ul className='flex flex-col  w-full md:w-auto  md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 font-bold text-lg mt-4 md:mt-0'>
            <li > <Link href="/">Home</Link></li>
            <li > <Link href="/clientSide-fetching">CSR</Link></li>
            <li > <Link href="/serverSide-fetching">SSR</Link></li>
        </ul>
    </nav>
   </header>
  )
}

export default Header
