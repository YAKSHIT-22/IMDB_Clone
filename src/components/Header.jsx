import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center justify-between  max-w-5xl xl:max-w-6xl sm:mx-auto py-4 px-4">
       <div className="flex items-center gap-6">
         <MenuItem title="HOME" address="/" Icon={AiFillHome} />
         <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
       </div>
       <div className="flex items-center justify-center gap-4">
            <DarkModeSwitch/>
            <Link href="/">
                <h2 className="text-2xl p-1 font-monts font-bold flex items-center justify-center gap-2"><span className="bg-amber-500  dark:hover:bg-white hover:bg-amber-500 dark:hover:text-amber-500 p-2 rounded-sm transition duration-500 ease-in-out">IMDB</span><span className="text-xl hidden sm:inline">CLONE</span></h2>
            </Link>
       </div>
    </div>
  )
}
