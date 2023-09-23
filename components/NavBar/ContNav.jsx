import Link from "next/link"

import LinkButton from "../utils/LinkButton"
import Image from "next/image"

import back from "@/public/assets/icons/back.svg"

const ContNav = () => {
  return (
    <nav className="flex justify-between items-center xl:pt-[63px] xl:pb-[25px] py-[34px] xl:px-32 px-12 
                    max-w-[415px] mx-auto lg:max-w-none">
      <h1 className="hidden xl:block xl:text-4xl xl:font-bold">get<span className="text-qua">Linked</span></h1>
      <ul className=" items-center gap-14 hidden xl:flex">
        <li><Link href="/#timeline">Timeline</Link></li>
        <li><Link href="/#overview">Overview</Link></li>
        <li><Link href="/#faq">FAQs</Link></li>
        <li><Link href="/contact" className="gradientText">Contact</Link></li>
        <li className="ml-[121px] flex items-center justify-center"><LinkButton link="/register" >Register</LinkButton></li>
      </ul>
      <Link href="/" className="xl:hidden">
        <Image src={back} alt="back home btn" width={23} height={23} className="" />
      </Link>

    </nav>
  )
}

export default ContNav