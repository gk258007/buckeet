import React from 'react'
import supabase from '../../../utils/supabase'


async function getData(){
    const { data } = await supabase.from('titbit').select('place, Location');
    return { data };
}

export default async function page() {
    
    const {data } = await getData();
    return (
        
        <div >
        {data?.map((item,index)=>(
            <div key={index} style={{margin:10,fontFamily:'MADE',fontSize:20,color:'yellow'}}>
                <div style={{borderRadius:10,borderWidth:1,padding:12,borderColor:'black'}}>
                    <p>{item.place}</p>
                    <p>{item.Location}</p>
                    </div>
                </div>
        ))}
      </div>
  )
  
}
