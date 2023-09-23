import ContNav from "@/components/NavBar/ContNav"
import BluryBlob from "@/components/utils/BluryBlob"
import ContactForm from "@/components/utils/ContactForm"
import Socials from "@/components/utils/Socials"

const Cotact = () => {
  return (
    <div>
      <ContNav />
      <main className="flex flex-col pt-[15px] max-w-[320px] mx-auto xl:max-w-none xl:flex-row-reverse
                      xl:px-32 xl:pt-[140px] xl:pb-[115px] relative">
        <BluryBlob className="top-16 -left-12 xl:top-32" />
        <BluryBlob className="hidden xl:block xl:bottom-4 xl:-right-4" />
        <div className="xl:formBox xl:px-[90px] xl:py-[75px] xl:w-full xl:basis-full relative z-10">
          <h2 className="text-[20px] font-semibold text-qua pr-10 xl:mb-[34px]">
            Questions or need assistance? <br/> Let us know  about it!
          </h2>
          <p className="text-[12px] mt-[24px] mb-[30px] pr-20 xl:hidden">
            Email us below to any question related 
    to our event
          </p>
          <div className="xl:hidden ">
            <ContactForm display="mobile"/>
          </div>
          <div className="hidden xl:block">
            <ContactForm display="desktop"/>
          </div>
        </div>
        <div className="text-center my-[40px] xl:hidden">
          <p className="text-qua text-[12px]">
            Share on
          </p>
            <Socials scale={8} xScale={6} fScale={3} 
                  className="flex justify-center items-center gap-3" />
        </div>
        <div className="hidden xl:block text-base basis-full pt-[80px] relative z-10">
          <h2 className="text-[32px] font-semibold text-qua ">
            Get in touch
          </h2>
          <div className="my-[17px]">
            Contact <br/> Information
          </div>
          <div>
            27,Alara Street <br/> Yaba 100012 <br/> Lagos State
          </div>
          <div className="my-[22px]">
            Call Us : 07067981819
          </div>
          <div>
            we are open from Monday-Friday <br/> 08:00am - 05:00pm
          </div>
          <div className="mt-[35px] mb-[14px] text-qua">
            Share on
          </div>
          <Socials className="flex justify-start items-center gap-4"/>
        </div>
      </main>
    </div>
  )
}

export default Cotact