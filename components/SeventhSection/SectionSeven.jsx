import Image from "next/image";

import prize from "@/public/assets/images/prize.png";
import Prizes from "./Prizes";
import BluryBlob from "../utils/BluryBlob";
import Star from "../utils/Star";

const SectionSeven = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-[72px] xl:px-32
                        xl:items-end xl:pb-28 secBackground relative">

        <BluryBlob className="bottom-28 -right-16 xl:-right-32" />
        <div className="section_text_container xl:w-[40%] xl:pr-20  mb-[40px] relative z-10">
            <h2 className="section_title">
                Prizes and <br /> <span className="text-qua">Rewards</span>
            </h2>
            <p className="section_text">
                Highlight of the prizes or rewards for winners and for participants. 
            </p>
            <Star type="g" className="-top-[20%] -left-0 xl:-left-[100%] xl:-top-0" />
            <Star type="g" className="top-[20%] right-[20%] xl:top-[65%] xl:right-[40%] -z-10" />
        </div>
        <div className="grid grid-cols-1 place-items-center xl:grid-cols-2 xl:gap-9">
            <div className="relative mx-auto w-full max-w-[500px] xl:max-w-none mb-[113px] xl:mb-0 xl:self-start">
                <Image src={prize} alt="golden cup as a prize" className="w-full xl:object-cover relative z-10" />
                <BluryBlob className="-top-20 left-8 xl:left-auto xl:-top-0 xl:right-8 " />
                <Star type="w" className="hidden xl:block xl:-bottom-[10%] xl:right-[55%] xl:max-w-[15px] xl:max-h-[18px]" />
                <Star type="w" className="hidden xl:block xl:bottom-[21%] xl:right-[21%] xl:z-0" />
            </div>
            <div className="relative">
                <Prizes />
                <Star type="w" className="-top-[60%] left-[5%] xl:-top-[0] xl:left-[10%]" />
                <Star type="w" className="-top-[25%] right-[3%] xl:top-[30%] xl:right-[0]" />
                <Star type="wo" className="bottom-[15%] right-[30%] xl:-bottom-[5%] xl:right-[32%]" />
            </div>
        </div>
    </section>
  )
}

export default SectionSeven