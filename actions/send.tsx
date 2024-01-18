'use server'

import { revalidatePath } from "next/cache"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"

import { cookies } from 'next/headers'


export const sendData = async (formData: FormData) =>{
    
    const place = formData.get('Place')
    const Location = formData.get('Location')
    const supabase = createServerActionClient({cookies})
    const response = await supabase.from('titbit').insert({ place,Location})
    return response;
    revalidatePath('/')
  }