"use client"
import { useEffect } from "react";

export default function Error({error,reset}){
    useEffect(() => {
      console.log(error);
    },[error])
    return(
        <div className="flex items-center justify-center flex-col gap-4 mt-10">
        <h1>Something went wrong.</h1>
        <button className="bg-red-500 text-white p-3 text-sm rounded-sm" onClick={()=>reset()}>Try Again</button>
        </div>
    )
}