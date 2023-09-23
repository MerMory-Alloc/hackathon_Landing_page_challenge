import Image from "next/image"

import reg from "@/public/assets/images/reg.png"
import RegistrationForm from "@/components/utils/RegistrationForm"
import BluryBlob from "@/components/utils/BluryBlob";
import RegNav from "@/components/NavBar/RegNav";

async function getData() {
  const baseUrl = "https://backend.getlinked.ai";
  const res = await fetch(`${baseUrl}/hackathon/categories-list`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
 
  return res.json()
}

const Register = async () => {
  
  const categoriesList = await getData();
  
  return (
    <div>
      <RegNav />
      <BluryBlob className="hidden xl:block xl:-bottom-[350px] xl:-right-4 z-0" />
      <main className="max-w-[320px] mx-auto grid place-items-center
                      grid-cols-1 xl:grid-cols-2 xl:max-w-none
                      xl:pt-[65px] xl:pb-[55px] xl:px-32 ">
        
        
        <div className="mx-auto relative ">
          <BluryBlob className="top-16 -left-32 xl:top-0" />
          <Image src={reg} className="w-[195px] h-[155px] xl:w-full xl:h-full object-cover relative z-10"/>
        </div>
        <div className="xl:formBox xl:px-[90px] xl:py-[65px] ">
          <h2 className="hidden xl:block text-[32px] font-semibold text-qua">
            Register
          </h2>
          <p className="text-[12px] xl:text-[14px] mt-[23px]">
            Be part of this movement!
          </p>
          <p className="mt-[7px] mb-[23px] text-[20px] xl:text-[24px]">
            CREATE YOUR ACCOUNT
          </p>
          <RegistrationForm categoriesList={categoriesList} />
        </div>
      </main>
    </div>
  )
}

export default Register