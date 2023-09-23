import Image from "next/image"

import medal1 from "@/public/assets/images/medal1.png"
import medal2 from "@/public/assets/images/medal2.png"
import medal3 from "@/public/assets/images/medal3.png"

const Prizes = () => {
  return (
    <div className="flex justify-center items-center gap-3 xl:gap-8 mb-[90px] xl:mb-0 xl:mt-56">

        <div className="font-bold text-xs border-[1px] border-ter rounded-lg bg-ter/[.12]
                         w-[90px] h-[125px] flex flex-col justify-end items-center relative
                         pb-5 xl:pb-8 xl:w-[212px] xl:h-[296px] xl:text-[24px]">
            <div className=" w-[75px] xl:w-[179px] absolute left-1/2 -translate-x-1/2 -top-[30%]">
                <Image src={medal2} alt="golden cup as a prize" className="w-fill" />
            </div>
                <div className="xl:text-[36px] xl:p-4">
                    2nd
                </div>
                <div>
                    Runner
                </div>
                <div className="text-qua leading-[216.4%] text-[14px] xl:text-[32px] ">
                    N300,000
                </div>
        </div>

        <div className="font-bold text-xs border-[1px] border-ter rounded-lg bg-ter/[.12]
                         w-[90px] h-[148px] flex flex-col justify-end items-center relative
                         pb-3 xl:pb-5 xl:w-[212px] xl:h-[347px] xl:text-[24px]">
            <div className=" w-[125px] xl:w-[296px] absolute left-1/2 -translate-x-1/2 -top-[45%]">
                <Image src={medal1} alt="golden cup as a prize" className="w-fill" />
            </div>
                <div className="xl:text-[40px] xl:p-4">
                    1st
                </div>
                <div>
                    Runner
                </div>
                <div className="text-ter leading-[216.4%] text-[14px] xl:text-[32px] mt-1">
                    N400,000
                </div>
        </div>

        <div className="font-bold text-xs border-[1px] border-ter rounded-lg bg-ter/[.12]
                         w-[90px] h-[125px] flex flex-col justify-end items-center relative
                         pb-4 xl:pb-8 xl:w-[212px] xl:h-[296px] xl:text-[24px]">
            <div className=" w-[75px] xl:w-[179px] absolute left-1/2 -translate-x-1/2 -top-[25%]">
                <Image src={medal3} alt="golden cup as a prize" className="w-fill" />
            </div>
                <div className="xl:text-[36px] xl:p-4">
                    3rd
                </div>
                <div>
                    Runner
                </div>
                <div className="text-qua leading-[216.4%] xl:text-[32px] ">
                    N150,000
                </div>
        </div>

    </div>
  )
}

export default Prizes