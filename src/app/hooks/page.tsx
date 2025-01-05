"use client";
import React, { useEffect ,useState} from 'react'

const page = () => {
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)    
        setTimeout(()=>{
        console.log("ye component load se phele chalega");
        setLoading(false);
    },5000)
    }) 
  return (
    
    <div>
      {loading? "Loading.....":"This is my page" }
    </div>
  )
}

export default page
