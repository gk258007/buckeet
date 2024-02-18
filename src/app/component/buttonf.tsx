'use client';
import React, { useState } from 'react'



export default function Buttonf({data}:{data:any}) {
const[resstat,setResstat] =useState(false);
// const sendData=async()=>{
// let resp = await updatefre()
// if(resp.status==200)
// {

//   setResstat(true)
// }else{
//   alert("SandStorm")
// }
// }

const  updatefre = async()=>{
 await fetch(`./places`,{
        method: "put",
        body: JSON.stringify({place: data})
    });
 
}

  return (
    
    <div>
       
    
        <button onClick={updatefre} style={{fontSize:50,fontFamily:'NeugAsia'}}>LessGooooo🚀🚀</button>
        {/* {resstat? <p style={{fontSize:50,fontFamily:'MADE'}}>Data was sent</p>:<p>DAMN!!</p>} */}
        </div>
  )
}
