import React from 'react'
import supabase from '../../../utils/supabase'
import Place from './place';


async function getData(){
    const { data } = await supabase.from('titbit').select('place, Location,id,Freq');
    return { data };
}

export default async function page() {
    const {data: places } = await getData();
    return (
        <div>
        {places?.map(place=><Place key={place.id} place={place}/>)}
      </div>
  )
  
}
