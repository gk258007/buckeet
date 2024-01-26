'use client';
import React from 'react'



export default function Buttonf({data}:{data:any}) {



const  updatefre = async()=>{
    await fetch(`http://localhost:3000/places`,{
        method: "put",
        body: JSON.stringify({place: data})
    });
    
}

  return (
    
    <div>
        <h1>Fetching from the place {data} </h1>
        <button onClick={updatefre}>We did go</button>
        </div>
  )
}
