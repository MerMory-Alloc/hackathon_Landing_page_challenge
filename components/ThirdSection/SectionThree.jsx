import Image from "next/image"

import women from "@/public/assets/images/women.png"
import BluryBlob from "../utils/BluryBlob"
import Star from "../utils/Star"

const SectionThree = () => {
  return (
    <section className="grid border-b-2 border-white/[.18] 
                         xl:px-32  place-items-center">
    
    <div className="grid grid-cols-1 gap-2.5 xl:grid-cols-2 xl:gap-12 xl:place-items-center max-w-[350px]
                    xl:max-w-none relative overflow-y-visible ">
        <BluryBlob className="top-0 -left-8 xl:right-[65%] xl:left-auto xl:top-[10%]" />
        <BluryBlob className="top-1/2 -right-1/2 -translate-y-1/2 xl:-right-[30%] 
                              xl:bottom-0 xl:-translate-y-0 xl:top-auto" />
        <div className="section_text_container order-2 xl:order-1 mb-[46px] xl:mb-0 px-2 relative z-10">
            <h2 className="section_title">
                Rules and <br /> <span className="text-qua">Guidelines</span>
            </h2>
            <p className="section_text">
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!
            </p>
            <Star type="wo2" className="top-8 right-0 xl:-top-[30px] xl:right-1/2"/>
            <Star type="w" className="-bottom-6 left-24 xl:hidden"/>
        </div>

        <div className="relative mx-auto order-1 xl:order-2 xl:after:content-ellipse xl:after:absolute
                        xl:after:top-16 xl:after:right-24 xl:after:z-0 2xl:after:top-24 2xl:after:right-28">
            <Image src={women} alt="women image" className="w-full object-cover relative z-10" />
            <Star type="w" className="bottom-1/2 left-4 xl:bottom-[200px] xl:-left-[20px]"/>
        </div>

    </div>

    </section>
  )
}

export default SectionThree