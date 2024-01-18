'use client'

import React, { useRef, useState } from 'react'
import {sendData} from '../../../actions/send'

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const [respon,setrespon] = useState<any>("");
    return (
    <div>
         <form id="newplace" style={{margin:120}} ref={ref} action={async (formData) => {
            ref.current?.reset()
          const response = await sendData(formData);
          setrespon(response.error?.message)
          //console.log(response.error?.message)
         }}>
            <h1 style={{color:'red'}}>{respon}</h1>
        <label>Place</label> 
        <input type='text' name='Place'  style={{display: 'block' ,marginBottom: 10,color:'black'}}></input>
        <label>Location </label>
        <input type='text' name='Location' style={{display:'block',marginBottom: 10,color:'black'}}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
   
  )
}
