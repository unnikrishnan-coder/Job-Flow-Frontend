"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashBoardNavbar = () => {
    const pathName = usePathname();

    return (
        <nav className="bg-white flex py-4 px-8 items-center">
            <div className="flex gap-2 items-center justify-center">
                <Image src={"/logo.png"} width={32} height={32} alt="logo" />
                <h1 className="font-inter font-bold not-italic text-[25px] leading-[100%] text-[#008D90]">Job Flow</h1>
            </div>
            <div className="flex gap-2 items-center justify-center ml-8">
                <Link href={"/dashboard"} className={`font-inter font-normal not-italic text-[19px] leading-[157%] ${pathName === "/dashboard" ? 'text-[#008D90]' : 'text-[#171A1F]'}`}>Dashboard</Link>
                <Link href={"/dashboard/links"} className={`font-inter font-normal not-italic text-[19px] leading-[157%] ${pathName === "/dashboard/links" ? 'text-[#008D90]' : 'text-[#171A1F]'}`}>My Links</Link>
            </div>
            <div className="flex gap-4 ml-auto items-center justify-center">
                <Image src={"/notification-icon.png"} width={40} height={40} alt="notification" className="cursor-pointer"/>
                <Image src={"/profile-avatar.png"} width={40} height={40} alt="avatar" className="cursor-pointer"/>
            </div>
        </nav>
    )
}

export default DashBoardNavbar