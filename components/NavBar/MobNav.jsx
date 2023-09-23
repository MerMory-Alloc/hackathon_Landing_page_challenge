'use client'

import { useState, useEffect } from "react"
import LinkButton from "@/components/utils/LinkButton"
import Link from "next/link"
import Image from "next/image"

import menubar from "@/public/assets/images/menu.svg"
import close from "@/public/assets/images/close.svg"

import border from "@/public/assets/icons/btnClose.svg"



const MobNav = () => {
    const [isOpen , setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen){
            document.body.style.overflow = "hidden";
        }
        else
          document.body.style.overflow = "scroll"
        return () => (document.body.style.overflow = "scroll");
    }, [isOpen]);

  return (
    <div className="xl:hidden">
        {isOpen ? (
            <div className="navMobBox absolute top-0 right-0 w-[100%] h-[100vh] px-12 py-[34px] z-50">
                <div className="mb-[40px] w-full flex justify-end">
                <button className="relative w-[23px] h-[23px] grid place-items-center"  onClick={() => setIsOpen(false)}>
                    <Image src={close} alt="close" width={11} height={11} className="" />
                    <Image src={border} alt="close" width={23} height={23} className="absolute top-0 right-0" />
                </button>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-4 justify-start text-[18px]">
                        <li className="w-max" onClick={() => setIsOpen(false)}><Link  href="/#timeline">Timeline</Link></li>
                        <li className="w-max" onClick={() => setIsOpen(false)}><Link href="/#overview">Overview</Link></li>
                        <li className="w-max" onClick={() => setIsOpen(false)}><Link href="/#faq">FAQs</Link></li>
                        <li className="w-max" onClick={() => setIsOpen(false)}><Link href="/contact">Contact</Link></li>
                        <li className="w-[172px] mt-4 text-[16px]" onClick={() => setIsOpen(false)}><LinkButton link="/register" >Register</LinkButton></li>
                    </ul>
                </div>
            </div>
        ):(<button className="" onClick={() => setIsOpen(true)}>
            <Image src={menubar} alt="menu bar" width={19} className="" />
        </button>)}

    </div>
  )
}

export default MobNav