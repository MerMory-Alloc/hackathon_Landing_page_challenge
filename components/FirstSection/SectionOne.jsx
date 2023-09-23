import Image from "next/image"
import LinkButton from "../utils/LinkButton"

import chain from "@/public/assets/images/chain.png"
import bom from "@/public/assets/images/bom.png"
import manGlass from "@/public/assets/images/manGlass.png"
import glob from "@/public/assets/images/glob.png"
import line from "@/public/assets/images/line.svg"
import BluryBlob from "../utils/BluryBlob"
import web from "@/public/assets/images/web.png"
import Star from "../utils/Star"

const SectionOne = () => {
    
  return (
    <section className="pt-9 xl:pt-8 flex flex-col"
             id="overview">
        <div className="italic font-bold text-base text-center mb-14 z-10
                    xl:text-4xl xl:text-right xl:mr-14 xl:mb-10 relative w-max mx-auto">
            Igniting a Revolution in HR Innovation
            <Image src={line} alt="line" className="absolute right-0 xl:-bottom-4 w-[115px] h-[7px] 
                                                    xl:w-auto xl:h-auto " />
            <Star type="wo" className="-bottom-[35px] right-[25px] xl:-bottom-[125px] xl:right-[500px] 2xl:right-[600px]" />
        </div>
        <div className="grid grid-cols-1 gap-3 xl:gap-[58px] xl:grid-cols-2 xl:pl-32 
                         grow ">
            <div className="flex flex-col justify-center items-center xl:items-start">
                <h2 className="font-bold leading-[126%] text-4xl text-center xl:text-[80px]
                             xl:text-left whitespace-nowrap xl:leading-none relative xl:mt-10">
                    <span className="relative z-10 ">getlinked Te<span className="lightbulb">c</span>h <br />Hackathon <span className="text-qua">1.0</span>
                    <Star type="w" className=" -top-[25px] left-[50px] xl:-top-[100px] xl:left-[60px]" /> </span>
                    <Image src={chain} alt="chain" className="inline w-8 h-8 xl:w-[86px] xl:h-[86px]" />
                    <Image src={bom} alt="bom"  className="inline w-[22px] h-[22px] xl:w-[58px] xl:h-[58px]" />
                    
                    <BluryBlob className="-top-12 -left-12 xl:-top-[125%] xl:right-32 xl:left-auto z-0" />
                </h2>
                <p className="leading-[166%] mb-6 mt-2.5 text-[13px] w-1/2 mx-auto text-center
                             xl:text-[20px] xl:text-left xl:w-full xl:mt-2 xl:mb-10 relative z-10">
                    Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                </p>
                <LinkButton link="/Register" >Register</LinkButton>
                <div className="flex gap-6 items-center mt-3.5 xl:mt-[77px] xl:mb-[90px] relative">
                    <p className="xl:text-[64px] text-[48px] font-unica">00<span className="text-[14px] font-montserrat">H</span></p>
                    <p className="xl:text-[64px] text-[48px] font-unica">00<span className="text-[14px] font-montserrat">M</span></p>
                    <p className="xl:text-[64px] text-[48px] font-unica">00<span className="text-[14px] font-montserrat">S</span></p>
                    <Star type="wo" className="right-[5px] -top-[50px] xl:-top-[40px] xl:-right-[220px]" />
                </div>
            </div>
            <div className="flex justify-center items-end relative">
                <Image src={manGlass} alt="man with a glasses"  className="w-full relative z-10 max-w-[420px] xl:max-w-none" />
                <Image src={glob} alt="a glowing glob"  className="absolute z-30 w-[340px] xl:w-[667px]" />
                <Image src={web} alt="a web"  className="hidden xl:block absolute z-0 w-full opacity-5" />
                <BluryBlob className="hidden xl:block top-32  right-1/2 translate-x-1/2 z-20 2xl:top-24 2xl:right-24 2xl:translate-x-0" />
            </div>
        </div>
    </section>
  )
}

export default SectionOne