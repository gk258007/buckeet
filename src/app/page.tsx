
import React from 'react'
import supabase from '../../utils/supabase'
import Buttonf from './component/buttonf';


async function getData(){
  
  const { data} = await supabase
  .from("titbit")
  .select("id,place,Location")
  return {data};
}



  export default async function page() {
    
    const { data }= await getData()
    let length= data?.length
    const ran_int = Math.floor(Math.random() * length!);
   // console.log("The place that was fetched from the random generator",data![ran_int].place)
  return (
   <div>
    <h1 style={{fontFamily:'MADE',fontSize:30}}>Welcome aboard today you have to go ☀️</h1>
    <h1 style={{fontFamily:'NeugAsia',fontSize:60,color:'yellow'}}>{data![ran_int].place}</h1>
    <h1 style={{fontFamily:'NeugAsia',fontSize:60,color:'yellow'}}>{data![ran_int].Location}</h1>  
    <Buttonf data={data![ran_int].id}/>      
   </div>
  );

}
