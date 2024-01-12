import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'
import { UserButton } from "@clerk/nextjs";


async function getData(){
  const { data} = await supabase
  .from("UruSuThona")
  .select("things_to_do")
  .eq("DONE","FALSE")
  return {data};

}
 
  export default async function page() {
    const ran_int = Math.floor(Math.random() * 10);
    // let place = data[ran_int]
    
    //console.log(place)
    const { data }= await getData()
    console.log(data)
  return (
   <div>
    <h1 style={{fontFamily:'MADE',fontSize:30}}>Welcome aboard today you have to go ☀️</h1>
    <div style={{marginLeft:50}}>
    </div>
    <h1 style={{fontFamily:'NeugAsia',fontSize:60,color:'yellow'}}>{data![ran_int].things_to_do}</h1>
   </div>
  );

}
