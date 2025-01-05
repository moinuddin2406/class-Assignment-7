import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600  text-white h-auto '>
        <div className='container mx-auto flex flex-wrap justify-between items-center py-6 px-4'>
             {/* logo section */}
             <div className=' w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0'>
                <h1 className='text-3xl font-bold mb-2'>Data Fetching</h1>
             
             {/* Link section */}
             <ul className=' flex flex-col space-y-2  font-bold text-lg'>
            <li > <Link href="/">Home</Link></li>
            <li > <Link href="/clientSide-fetching">CSR</Link></li>
            <li > <Link href="/serverSide-fetching">SSR</Link></li>
            </ul>
        </div>
        {/* contact-section */}
        <div className='w-full md:w-1/3 text-center md:text-right'>
            <h1 className='text-2xl font-bold mb-2'>Contact</h1>
            <p>Phone No : 12345678900</p>
            <p>Email : Moin0000@gmail.com</p>
        </div>
        </div>
        {/* Divider line */}
        <hr className='border-white my-4' />
        {/* copyright section */}
        <p className='text-center md:text-base  text-sm  text-red-800 p-3 font-semibold'>Copyrights Data Fetching &copy;2025 | All Rights are Reserved</p>
    </footer>
  )
}

export default Footer
