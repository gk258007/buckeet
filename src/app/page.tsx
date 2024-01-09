import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'

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
  
   <div>Welcome Home today you have to do 
    <h1 style={{fontFamily:'Saltburn',fontSize:200,color:'yellow'}}>{data[ran_int].things_to_do}</h1>
    <button>Did</button>
    <button>Nope</button>
   </div>
  );

}
