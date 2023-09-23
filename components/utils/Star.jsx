import Image from "next/image"
const Star = ({type , className}) => {
  return type === "w" ? (
    <div className={"absolute w-[10px] h-[12px] xl:w-[26px] xl:h-[32px] " + className}>
        <Image src="/assets/images/star.svg" alt="star" width={26} height={32} />
    </div>
  ) : type === "wo" ? (
    <div className={"absolute w-[6px] h-[8px] xl:w-[26px] xl:h-[32px] opacity-50 " + className}> 
        <Image src="/assets/images/star.svg" alt="star" width={26} height={32} />
    </div>
  ) : type === "wo2" ? (
    <div className={"absolute w-[12px] h-[14px] xl:w-[26px] xl:h-[32px] opacity-50 " + className}> 
        <Image src="/assets/images/star.svg" alt="star" width={26} height={32} />
    </div>
  ) : type === "v" ? (
    <div className={"absolute w-[8px] h-[10px] xl:w-[26px] xl:h-[32px] " + className}>
        <Image src="/assets/images/star_v.svg" alt="star" width={26} height={32} />
    </div>
  ) : type === "v2" ? (
    <div className={"absolute w-[13px] h-[17px] xl:w-[30px] xl:h-[36px] " + className}>
        <Image src="/assets/images/star_v.svg" alt="star" width={30} height={36} />
    </div>
  ) : type === "g" ? (
    <div className={"absolute w-[11px] h-[13px] xl:w-[21px] xl:h-[25px] " + className}>
        <Image src="/assets/images/star_g.svg" alt="star" width={26} height={32} />
    </div>
  ) : (
    <></>
  )
}

export default Star