import Image from "next/image"

import idea from "@/public/assets/images/idea.png"
import swirl from "@/public/assets/images/swirl.png"
import Star from "../utils/Star"

const SectionTwo = () => {
  return (
    <section className="grid grid-cols-1 border-y-2 border-white/[.18] gap-[58px] pt-7
                        xl:grid-cols-2 xl:py-20 xl:px-32 xl:gap-[100px]">
        <div className="mx-auto relative">
            <Image src={idea} alt="lightbulb image" 
                   className={`w-[264px] xl:w-[490px]`} />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2  text-[14px] xl:text-[24px] text-center font-bold leading-[122.5%]">
                The Big <br /> Idea!
            </p>
            <Image src={swirl} alt="swirl image" 
                   className="absolute -bottom-8 right-1/2 translate-x-1/2 xl:translate-x-0 xl:-bottom-4 
                              xl:-right-4 xl:w-[50px] xl:h-[58px] w-[20px] h-[22px]" />
            <Star type="g" className="top-[90px] -left-[20px] xl:-left-[50px] xl:top-[150px]" />
        </div>
        <div className="section_text_container mb-[58px] xl:mb-0">
            <h2 className="section_title relative">
                Introduction to getlinked <br /> <span className="text-qua">tech Hackathon 1.0</span>
                <Star type="v" className="top-1/2 -translate-y-1/2 -right-[30px] xl:-right-[100px]"/>
            </h2>
            <p className="section_text">
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
day: to shape the future. Whether you're 
a coding genius, a design maverick, or a 
concept wizard, you'll have the chance to transform your ideas into reality. Solving 
real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world, that's what we're all about!
            </p>
        </div>
    </section>
  )
}

export default SectionTwo