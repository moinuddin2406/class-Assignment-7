import React from 'react'
interface Books{
    id:number;
    name: string;
    type : string
    available :boolean
  }
const Code = async() => {
    const res = await fetch("https://simple-books-api.glitch.me/books/")
    const parsedResponse :Books[] =await res.json()
    console.log("books ===>" ,parsedResponse)
  return (
    <div>
      <h1 className='text-center text-4xl font-bold mb-8 mt-8 text-blue-600'>Server Side Data Fetching</h1>
    <div >
       {parsedResponse.map((books,index)=>(
        <div key={index} className='grid m-6 mx-12 sm:mx-12 md:mx-40 lg:mx-80 bg-gray-200 hover:bg-purple-400 border-violet-900  shadow-inner border rounded-lg'>
          <p className='text-[16px] text-center font-bold'>id :{books.id}</p>
          <p className='text-xl text-center text-red-600 font-semibold'>name :{books.name}</p>
          <p className=' text-center text-blue-600 font-medium'>type :{books.type}</p>
          <p className='text-center'>available :{`${books.available}`}</p>
          </div>
          ))}
    </div>
    </div>
  )
}

export default Code


