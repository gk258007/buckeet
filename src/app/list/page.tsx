
import React from 'react'
import { createServerActionClient} from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import { FormEvent } from 'react'
import supabase from '../../../utils/supabase'
import { revalidatePath } from 'next/cache'




export default async function page() {
  const sendData = async (formData: FormData) =>{
    'use server'
    const place = formData.get('Place')
    const Location = formData.get('Location')
    const supabase = createServerActionClient({cookies})
    await supabase.from('titbit').insert({ place,Location})
    revalidatePath('/')
  }
  
  

  return (
    <div style={{fontFamily:'MADE',fontSize:30}}>
      <h1>Here We Add stuff to the Bucket List 🪣 </h1>
      <form style={{margin:120}} action={sendData}>
        <label>Place</label> 
        <input type='text' name='Place'  style={{display: 'block' ,marginBottom: 10,color:'black'}}></input>
        <label>Location </label>
        <input type='text' name='Location' style={{display:'block',marginBottom: 10,color:'black'}}></input>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}
  