import Image from "next/image" 

import woho from "@/public/assets/images/woho.png"
import right from "@/public/assets/images/right.png"
import wink from "@/public/assets/images/wink.png"

const Modal = ({onClick, yaxi}) => {
    const style = {
        top: yaxi  + "px",
      };
  return (
    <div className="absolute left-0 right-0 w-full h-screen bg-transparent z-10" style={style}>
        <div className="bg-[#150e28ed] absolute  left-0 right-0 w-full h-screen" >
        </div>
        <div className="relative flex flex-col justify-center items-center
                        max-w-[350px] text-center modalBox px-8 mx-auto
                        top-1/2 -translate-y-1/2 py-6 xl:max-w-[699px]">
            <div className="flex justify-center items-center">
                <Image src={right} className="w-[174px] h-[174px] object-cover 
                                              relative left-[18%] bottom-2
                                              xl:w-[288px] xl:h-[288px]"/>
                <Image src={woho} className="w-[184px] h-[184px] object-cover 
                                             relative right-[18%]
                                             xl:w-[305px] xl:h-[305px]"/>
            </div>
            <div className="text-base font-semibold my-8 xl:text-3xl">
                Congratulations <br /> you have successfully Registered!
            </div>
            <div className="text-[12px] font-medium mb-4 xl:text-[14px] xl:fint-semibold xl:w-1/2">
                Yes, it was easy and you did it! check your mail box for next step
                <Image src={wink} className="inline w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]" />
            </div>
            <button className="btn w-full xl:w-[90%] mx-auto" onClick={onClick} >
                Back
            </button>
        </div>
    </div>
  )
}

export default Modal