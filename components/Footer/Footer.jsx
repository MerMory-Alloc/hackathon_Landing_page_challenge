import Link from "next/link"
import Socials from "../utils/Socials"
import Image from "next/image"

import phone from "@/public/assets/images/phone.svg"
import location from "@/public/assets/images/location.svg"
import Star from "../utils/Star"

const Footer = () => {
  return (
    <footer className="bg-[#100B20] pt-[50px] pb-[50px] xl:pb-[40px] text-[12px] xl:px-32">
        <div className=" max-w-[350px] mx-auto xl:max-w-none xl:grid xl:grid-cols-2  xl:gap-28">
            <div className="relative">
                <div className="font-displayed xl:text-3xl text-[20px] font-bold">
                    get<span className="text-qua">Linked</span>
                </div>

                <div className=" mt-3 leading-[20px] xl:w-[412px]">
                    Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                </div>

                <div className="flex mt-[40px] xl:mt-[50px]">
                    <Link href="/" className="border-r-2 pr-2 border-qua">
                        Terms of Use 
                    </Link>
                    <Link href="/" className="pl-2">
                        Privacy Policy
                    </Link>
                </div>
                <Star type="w" className="max-w-[15px] max-h-[18px] top-[40%] xl:top-[20%] -left-8 xl:-left-20"/>
            </div>
            <div className="mt-8 xl:grid xl:grid-cols-2 xl:mt-3 xl:gap-16">
                <div className="relative">
                    <div className="text-qua font-semibold mb-1.5 text-[14px]">
                        Useful Links
                    </div>
                    <ul className="flex flex-col gap-3">
                        <li><Link href="/">Timeline</Link></li>
                        <li><Link href="/">Overview</Link></li>
                        <li><Link href="/">FAQs</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <div className="mt-3 flex gap-5 items-center">
                        <div className="text-qua">
                            Follow us
                        </div>
                        <Socials className="flex gap-5 justify-center items-center"/> 
                    </div>
                    <Star type="wo2" className="max-w-[15px] max-h-[18px] right-1/2 top-1/2 xl:right-0 xl:top-0"/>
                </div>

                <div className="mt-[60px] xl:mt-0 relative">
                    <div className="text-qua font-semibold mb-2 text-[14px]">
                        Contact Us
                    </div>
                    <div className="grid grid-cols-[12px_1fr] gap-x-4 gap-y-5">
                        <Image src={phone} alt="phone" width={12} height={12}/>
                        <div>
                            +234 679 81819
                        </div>
                        <Image src={location} alt="phone" width={12} height={14}/>
                        <div>
                            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                        </div>
                    </div>
                    <Star type="w" className="max-w-[15px] max-h-[18px] bottom-14 right-4 xl:bottom-0 xl:right-0"/>
                </div>

            </div>
        </div>
        <div className="w-full text-center mt-[60px] relative">
            All rights reserved. © getlinked Ltd.
            <Star type="g" className="max-w-[15px] max-h-[18px] left-[30%] xl:left-[50%] xl:translate-x-[-50%] -top-10"/>
        </div>
    </footer>
  )
}

export default Footer