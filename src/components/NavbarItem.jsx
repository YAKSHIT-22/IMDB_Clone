"use client";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItem({title,param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className="flex items-center justify-center gap-4 transition duration-200 ease-in-out">
       <Link className={`hover:text-amber-600 font-semibold p-2 transition duration-500 ease-in-out  ${
        genre && genre === param && "underline underline-offset-8 decoration-5 decoration-amber-500 rounded-full "
        }`} href={`/?genre=${param}`}>
         {title}
       </Link>
    </div>
  )
}
