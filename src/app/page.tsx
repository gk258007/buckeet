
import React from 'react'
import supabase from '../../utils/supabase'
import { UserButton } from "@clerk/nextjs";


async function getData(){
  const { data} = await supabase
  .from("titbit")
  .select("place")
  return {data};

}

  export default async function page() {
    
    const { data }= await getData()
    let length= data?.length
    const ran_int = Math.floor(Math.random() * length!);
    //let place = data[ran_int]
    
    //console.log(place)
   
    //console.log("Data from new DB",data[ran_int].place)
    //console.log("Data ",ran_int)
  return (
   <div>
    <h1 style={{fontFamily:'MADE',fontSize:30}}>Welcome aboard today you have to go ☀️</h1>
    <div style={{marginLeft:50}}>
     
    </div>
    <h1 style={{fontFamily:'NeugAsia',fontSize:60,color:'yellow'}}>{data![ran_int].place}</h1>  
   </div>
  );

}
