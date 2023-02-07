"use client";

import { useState } from "react";
import {useRouter} from "next/navigation";

export default function SearchBox() {
   const [search,setSearch] = useState(""); 
   const router = useRouter();
   function handleSubmit(e){
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
    setSearch("");
   }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-5xl justify-between items-center xl:max-w-6xl mx-auto p-5">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1" />
        <button disabled={!search} type="submit" className="text-amber-500 disabled:text-gray-400">Search</button>
    </form>

  )
}
