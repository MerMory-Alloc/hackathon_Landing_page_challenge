import Image from "next/image"
import QuestionItem from "./QuestionItem"
import questning from "@/public/assets/images/questning.png"
import qmarkB from "@/public/assets/images/qmarkB.svg"
import qmarkS from "@/public/assets/images/qmarkS.svg"
import Star from "../utils/Star"


const SectionFive = () => {

    const question_list = [
      {
        question : 'Can I work on a project I started before the hackathon?',
        answer : ''
      },
      {
        question : 'What happens if I need help during the hackathon?',
        answer : ''
      },
      {
        question : "What happens if I don't have an idea for a project?",
        answer : ''
      },
      {
        question : 'Can I join a team or do I have to come with one?',
        answer : ''
      },
      {
        question : 'What happens after the hackathon ends',
        answer : ''
      },
      {
        question : 'Can I work on a project I started before the hackathon?',
        answer : ''
      }
    ]
  return (
    <section id="faq" className="grid grid-cols-1 border-b-2 border-white/[.18] gap-2.5 pt-[74px]
                        xl:grid-cols-2 xl:px-32 xl:gap-12 xl:place-items-center">

    
        <div className="section_text_container mb-[86px] place-self-stretch relative max-w-[350px] mx-auto xl:max-w-none">
            <Star type="v2" className="xl:-top-[8%] xl:-left-[8%] top-0 left-8"/>
            <h2 className="section_title">
                Frequently Ask  <br /> <span className="text-qua">Question</span>
            </h2>
            <p className="section_text mb-[46px]">
                We got answers to the questions that you might <br/> want to ask about <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>
            <div>
                {question_list.map((item, index) => (
                    <QuestionItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>

        <div className="mx-auto w-[327px] xl:w-full mb-[48px] xl:mb-0 relative">
            <Image src={questning} alt="man questning his own fate image" className="w-full" />
            <div className="flex justify-center items-end gap-10 xl:gap-16 absolute -top-8 left-12 xl:left-20 xl:-top-12">
              <Image src={qmarkS} alt="question mark" className="w-[18px] xl:w-[33px]" />
              <Image src={qmarkB} alt="question mark" className="mb-4 w-[30px] xl:w-[45px]" />
              <Image src={qmarkS} alt="question mark" className="w-[18px] xl:w-[33px]" />
            </div>
            <Star type="wo" className="left-[7%] top-[50%]" />
            <Star type="g" className="right-1/2 xl:-translate-x-8 -translate-x-3 -top-[0px]" />
            <Star type="g" className="left-[20%] top-[20%]" />
            <Star type="w" className="right-[30%] -bottom-[0px]" />
        </div>

    </section>
  )
}

export default SectionFive