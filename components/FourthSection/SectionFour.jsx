import Image from "next/image"

import ops from "@/public/assets/images/ops.png"
import LinkButton from "../utils/LinkButton"
import BluryBlob from "../utils/BluryBlob"
import Star from "../utils/Star"

const SectionFour = () => {

  const listContent = [
    {
      title : 'Innovation and Creativity:',
      text : ' Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
    },
    {
      title : 'Functionality:',
      text : ' Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.',
    },
    {
      title : 'Impact and Relevance:',
      text : ' Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
    },
    {
      title : 'Technical Complexity:',
      text : ' Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
      title : 'Adherence to Hackathon Rules:',
      text : ' Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    }
  ]
  return (
    <section className="grid grid-cols-1 border-b-2 border-white/[.18] gap-2.5 pt-[74px]
                        xl:grid-cols-2 xl:px-32 xl:gap-14 xl:place-items-center relative">

        <div className="mx-auto relative xl:after:content-ellipse xl:after:absolute 
                        xl:after:-top-10 xl:after:left-[75px] xl:after:z-0">
            <Image src={ops} alt="man and women image" className="w-[332px] xl:w-full relative z-10" />
            <BluryBlob className="-bottom-8 -left-4 xl:-bottom-16" />
            <Star type="v2" className="-top-14 right-1/2 -translate-x-1/2 xl:-top-32 xl:right-auto xl:translate-x-0 xl:left-28 " />
            <Star type="wo2" className="bottom-28 left-1/2 translate-x-1/2 xl:bottom-1/2 xl:translate-x-8 " />
        </div>
    
        <div className="section_text_container mb-[58px]  max-w-[335px] mx-auto place-self-stretch
                        xl:max-w-none relative">
            <h2 className="section_title mb-2 xl:mb-0">
            Judging Criteria <br /> <span className="text-qua">Key attributes</span>
            </h2>
            {listContent.map((item, index) => (
              <p className="text-[12px] leading-[173.5%] mb-2 xl:mb-0 xl:text-[14px]">
                <span className="font-bold text-[#FF26B9] text-[13px] xl:text-[16px]">
                  {item.title}
                </span>
                {item.text}
              </p>
            ))}
            <LinkButton link="/" classList="btnReadMoreMobile xl:btnReadMore xl:mt-12" >Read More</LinkButton>
            <Star type="w" className="bottom-4 right-0  xl:right-auto xl:-left-24" />
        </div>
        <BluryBlob className="bottom-14 -right-28 xl:-bottom-20 xl:right-0" />

    </section>
  )
}

export default SectionFour