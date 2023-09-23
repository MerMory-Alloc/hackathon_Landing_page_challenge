import Link from "next/link"

import LinkButton from "../utils/LinkButton"
import MobNav from "./MobNav"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center xl:pt-[63px] xl:pb-[25px] py-[34px] xl:px-32 px-12  border-b-2 border-white/[.18]">
      <h1 className="xl:text-4xl text-base font-bold">get<span className="text-qua">Linked</span></h1>
      <ul className=" items-center gap-14 hidden xl:flex relative z-10">
        <li><Link href="/#timeline">Timeline</Link></li>
        <li><Link href="/#overview">Overview</Link></li>
        <li><Link href="/#faq">FAQs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li className="ml-[121px] flex items-center justify-center"><LinkButton link="/register" >Register</LinkButton></li>
      </ul>
      <MobNav />
    </nav>
  )
}

export default Nav