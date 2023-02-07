import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
  return (
    <div className="font-monts font-bold">
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-500 ">
           <Icon className="text-2xl sm:hidden hover:scale-[1.2] transition duration-200 ease-in-out" />
          <p className="hidden sm:flex my-2 text-md hover:scale-[1.2] transition duration-200 ease-in-out">{title}</p>
        </Link>
    </div>
  )
}
