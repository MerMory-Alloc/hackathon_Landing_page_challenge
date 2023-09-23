import Image from "next/image"
import LinkButton from "../utils/LinkButton"

import secur from "@/public/assets/images/secur.png"
import sheild from "@/public/assets/images/shield.svg"
import list from "@/public/assets/images/list.svg"
import BluryBlob from "../utils/BluryBlob"
import Star from "../utils/Star"

const SectionNine = () => {
  return (
    <section className='border-t-2 border-white/[.18] pt-[74px] grid grid-cols-1 gap-[48px]
                        xl:px-32 xl:pt-[93px] xl:grid-cols-2'>

      <div className="xl:self-end xl:mb-[160px]">

        <div className="section_text_container order-2 xl:order-1  xl:mb-0 relative  z-10">
              <h2 className="section_title relative">
                Privacy Policy and  <br /> <span className="text-qua">Terms</span>
                <Star type="wo" className="-top-8 right-0 xl:-top-2 xl:-right-20"/>
              </h2>
              <p className="text-[12px] xl:text-[14px] xl:mt-[17px] text-[#ffffffbf]">
                Last updated on September 12, 2023
              </p>
              <p className="text-[12px] xl:text-[14px] leading-[22px] max-w-[320px] 
                            xl:max-w-[435px] w-full my-[30px] ">
                Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
              </p>
              
              <Star type="v2" className="bottom-6 right-32 xl:bottom-28 xl:right-0 xl:max-w-[23px] xl:max-h-[28px]"/>
        </div>

        <div className="py-[45px] px-[22px] max-w-[320px] mx-auto bg-[#d9d9d908] border-[1px] 
                        border-qua rounded-[5px] xl:max-w-none xl:mx-0
                        text-[12px] xl:text-[14px] xl:mt-[40px] relative">

          <Star type="v2" className="-left-10 bottom-[30%] xl:-left-20"/>

          <p className="text-center mb-[20px] xl:text-left">
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
          </p>
          <div className="text-[13px] xl:text-[16px] text-qua font-bold leading-[28px]">
            Licensing Policy
          </div>
          <p className=" font-bold leading-[25px]">
            Here are terms of our Standard License:
          </p>
          <ul className=" leading-[22px]">
            <li className="mt-[24px] grid grid-cols-[17px_1fr] gap-[14px]">
              <div className="relative top-1">
                <Image src={list} alt="list vector" className="" />
              </div>
              <div>
                The Standard License grants you a non-exclusive right to navigate and register for our event
              </div>
            </li>
            <li className="mt-[24px] grid grid-cols-[17px_1fr] gap-[14px]">
              <div className="relative top-1">
                <Image src={list} alt="list vector" className="" />
              </div>
              <div>
                You are licensed to use the item available at any free source sites, for your project developement
              </div>
            </li>
          </ul>
          <LinkButton link="/" classList="link mt-[24px] py-3 xl:py-4 w-[45%] xl:w-[35%] mx-auto"> Read More</LinkButton>
          <BluryBlob className="top-[47%] -left-28 xl:-left-32 xl:-bottom-32 xl:top-auto" />
        </div>
      </div>

      <div className="relative max-w-[320px] xl:max-w-[560px] mx-auto">
        <Image src={sheild} alt="shield vector" 
              className="w-[249px] h-[311px] xl:w-[530px] xl:h-[648px] object-contain mx-auto" />
        <Image src={secur} alt="secure lock" 
               className="w-full h-[351px] xl:h-[749px] object-cover relative -top-[220px] 
                          xl:-top-[450px] xl:-mb-[300px] -mb-[140px]" />
        <Star type="w" className="top-[17%] right-[27%] xl:max-w-[15px] xl:max-h-[18px]"/>
        <Star type="wo" className="top-[70%] right-[6%] xl:-right-[5%]"/>
        <Star type="v2" className="top-[15%] -left-0 xl:hidden "/>
        <Star type="w" className="top-[65%] left-[20%] xl:max-w-[15px] xl:max-h-[18px]"/>
        <Star type="g" className="hidden xl:block top-[56%] left-[30%] xl:max-w-[15px] xl:max-h-[18px]"/>
      </div>
    </section>
  )
}

export default SectionNine