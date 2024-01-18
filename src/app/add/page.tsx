
import React, { createRef } from 'react'
import { createServerActionClient} from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import supabase from '../../../utils/supabase'
import { revalidatePath } from 'next/cache'
import Form from '../component/form'





export default async function page() {
  
  
  

  return (
    <div style={{fontFamily:'MADE',fontSize:30,}}>
      <h1>Here We Add stuff to the Bucket List 🪣 </h1>
      <Form/>
      
    </div>
  )
}
  