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
        
        <button onClick={updatefre}>We did go</button>
        </div>
  )
}
