import Image from "next/image"

import insta from "@/public/assets/images/insta.svg"
import x from "@/public/assets/images/x.svg"
import face from "@/public/assets/images/face.svg"
import linkedin from "@/public/assets/images/linkedin.svg"
import Link from "next/link"

const Socials = ({className,scale , xScale, fScale}) => {

  let scl = scale ? scale : 0;
  let xScl = xScale ? xScale : 0;
  let fScl = fScale ? fScale : 0;

  return (
    <div className={className}>
      <Link href="/"><Image src={insta} alt="instagram" width={24 - scl} height={24 - scl}/></Link>
      <Link href="/"><Image src={x} alt="x" width={19 - xScl} height={17 - xScl}/></Link>
      <Link href="/"><Image src={face} alt="facebook" width={10.5 - fScale} height={20 - fScale} /></Link>
      <Link href="/"><Image src={linkedin} alt="linkedin" width={24 - scl} height={24 - scl}/></Link>
    </div>
  )
}

export default Socials