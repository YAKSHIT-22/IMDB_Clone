"use client";

import {MdLightMode} from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch(){
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(()=>setMounted(true),[]);

    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <div className="flex items-center justify-center transition ease-in-out duration-200">
            {mounted && (currentTheme === "dark" ? (
                   <MdLightMode className="text-xl cursor-pointer hover:text-amber-500 hover:scale-[1.2] transition duration-200 ease-in-out" onClick={()=>setTheme("light")}/>
            ): (
                <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500 hover:scale-[1.2] transition duration-200 ease-in-out" onClick={()=>setTheme("dark")}/>
            )) }
          
           
        </div>
    )
}