import Image from "next/image";

import la from "@/public/assets/images/la.png";
import lp from "@/public/assets/images/lp.png";
import ww from "@/public/assets/images/ww.png";
import ws from "@/public/assets/images/ws.png";
import pb from "@/public/assets/images/pb.png";
import vp from "@/public/assets/images/vp.png";
import BluryBlob from "../utils/BluryBlob";
import Star from "../utils/Star";
const SectionEight = () => {
  return (
    <section className="xl:px-32 pb-[104px] xl:pb-[128px]">
        <div className="text-center my-[40px] xl:mb-[65px] xl:mt-[114px]">
            <h2 className="section_title">
                Partners and Sponsors
            </h2>
            <p className="text-[12px] xl:text-[14px] leading-[20px] max-w-[335px] xl:max-w-[350px] mx-auto
                         mt-[6px] xl:mt-[20px]">
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors 
            </p>
        </div>
        <div className="w-full border-[1px] border-qua rounded-[5px] grid grid-cols-3 px-[48px]
                        py-[38px] max-w-[335px] mx-auto grid-rows-[repeat(2,36px)] xl:grid-rows-[repeat(2,136px)]
                        xl:max-w-none xl:px-[180px] xl:py-[145px] gap-x-6 gap-y-8 relative">
                                
                <BluryBlob className="-top-[100%] -left-32 xl:-left-32 xl:-top-32" />
                <BluryBlob className="-bottom-[110%] -right-28 xl:-right-32 xl:-bottom-32" />

                <Star type="v" className="top-0 left-[12%] xl:-top-[6%]" />
                <Star type="g" className="right-[45%] top-[30%] lg:right-[40%] lg:top-[20%] max-h-[7px] max-w-[7px] xl:max-w-none xl:max-h-none z-0" />
                <Star type="w" className="bottom-0 right-[20%] xl:bottom-[15%] xl:right-[45%]" />
            
            <div className=" grid place-items-center px-3 xl:px-6 llined blined relative">
                    <Image src={la} alt="sponsor company logo" className="h-[36px] xl:h-[136px] object-contain"/>
            </div>

            <div className=" grid place-items-center px-3 xl:px-6 llined blined relative">
                    <Image src={lp} alt="sponsor company logo" className="h-[36px] xl:h-[136px] object-contain"/>
            </div>

            <div className=" grid place-items-center px-3 xl:px-6 blined relative">
                    <Image src={ww} alt="sponsor company logo" className="h-[36px] xl:h-[136px] object-contain"/>
            </div>

            <div className=" grid place-items-center px-3 xl:px-6 llined relative">
                    <Image src={ws} alt="sponsor company logo" className="h-[36px] xl:h-[136px] object-contain"/>
            </div>

            <div className=" grid place-items-center px-3 xl:px-6 llined relative">
                    <Image src={pb} alt="sponsor company logo" className="h-[36px] xl:h-[136px] object-contain"/>
            </div>

            <div className=" grid place-items-center px-3 xl:px-6">
                    <Image src={vp} alt="sponsor company logo" className="h-[36px] xl:h-[136px] object-contain"/>
            </div>

        </div>
    </section>
  )
}

export default SectionEight