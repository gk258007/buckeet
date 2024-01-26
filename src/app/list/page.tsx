import React from 'react'
import supabase from '../../../utils/supabase'
import Place from './place';
export const dynamic = "force-dynamic";

async function getData(){
    const { data } = await supabase.from('titbit').select('place, Location');
    return { data };
}

export default async function page() {
    const {data: places } = await getData();
    return (
        
        <div >
            
        {places?.map(place=><Place place={place}/>)}
       
      </div>
  )
  
}
