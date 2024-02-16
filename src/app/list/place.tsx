import React from 'react'

export default function Place({place}: {place:any}) {
  return (
    <div style={{margin:10,fontFamily:'MADE',fontSize:20,color:'yellow'}}>
                <div style={{borderRadius:10,borderWidth:1,padding:12,borderColor:'black'}}>
                    <p>{place.place}</p>
                    <p>{place. Location}</p>
                    {/* <p>{place. Freq}</p> */}
                    </div>
                </div>
  )
}
