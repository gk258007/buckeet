'use client';
import React, { useState } from 'react'



export default function Buttonf({data}:{data:any}) {
const[resstat,setResstat] =useState<any>();
const sendData=async()=>{
let resp = await updatefre()
if(resp.status==200)
{

  setResstat(true)
}else{
  alert("SandStorm")
}
console.log("The response from the api request sent through the SendData button",resp.status)
}

const  updatefre = async()=>{
  let response=await fetch(`./places`,{
        method: "put",
        body: JSON.stringify({place: data})
    });
    return response;
}

  return (
    
    <div>
       
    
        <button onClick={sendData} style={{fontSize:50,fontFamily:'NeugAsia'}}>LessGooooo🚀🚀</button>
        {resstat? <p style={{fontSize:50,fontFamily:'MADE'}}>Data was sent</p>:<p></p>}
        </div>
  )
}
