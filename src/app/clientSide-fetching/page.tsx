"use client";
import React ,{useEffect, useState} from "react";

interface Client{
    id:number;
    title: string;
    price:number;
    description : string;
    category :string;
    image :string;
    rating:{
        rate: number;
        count: number;
    }

}
const page = () => {
    const[data ,setData] = useState<Client[]>([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(
              "https://fakestoreapi.com/products"
            );
            const parsedResponse: Client[] = await response.json();
            console.log("client >>>", parsedResponse);
            setData(parsedResponse);
    };
    fetchData();
},[]);
  return (
    <div>
      <h1 className='text-center text-4xl font-bold mb-8 mt-8 text-blue-600'>Client Side Data Fetching</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         {data.map((client, index) => (
        <div key={index} className="border-blue-500 border rounded-md bg- hover:bg-purple-200 text-center p-5">
           <p className="text-red-500 font-semibold text-[20px] m-2">{client.category}</p>
          <img src={client.image} alt={client.title} className="w-full h-40 object-contain mb-3 " />
           {/* <p>id: {client.id}</p> */}
          <p className="font-bold text-base text-center m-2">{client.title}</p>
          <p className="text-blue-800">{client.description}</p>
          <p className="text-red-500">price: ${client.price}</p>
          {/* <p>{client.rating.rate}</p>
          <p>{client.rating.count}</p> */}
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-[36] h-[36] m-2">Add to Cart</button>
        
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default page
