import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server";

export async function PUT(request: Request){
    const supabase = createRouteHandlerClient({cookies});
 
    let count = 1;

    const {place} = await request.json()
    console.log("from the api route", place)

    let initcount = await supabase 
    .from('titbit')
    .select('Freq')
    .eq('id',place)
    console.log("Response from freq retreival", initcount.data)
    
    let inccount = initcount.data![0].Freq
    //console.log("The Freq from the database", inccount)
    count = inccount + 1
    const countdata = await supabase
    .from('titbit')
  .update({ Freq: count })
  .eq('id', place)

    console.log("Updated Freq count",count)

   
   return NextResponse.json(countdata);
}