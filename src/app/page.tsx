import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'

async function getData(){
  const { data} = await supabase.from("UruSuThona").select("things_to_do");
  return {data};

}
  
  export default async function page() {
    const ran_int = Math.floor(Math.random() * 10);
    // let place = data[ran_int]
    
    // console.log(place)
    const { data }= await getData()
    console.log(data[ran_int])
  return (
  
   <div>Welcome Home today you have to do 
    <h1>{data[ran_int].things_to_do}</h1>
   </div>
  );

}
