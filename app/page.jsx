import SectionEight from "@/components/EighthSection/SectionEight";
import SectionFive from "@/components/FifthSection/SectionFive";
import SectionOne from "@/components/FirstSection/SectionOne";
import Footer from "@/components/Footer/Footer";
import SectionFour from "@/components/FourthSection/SectionFour";
import SectionNine from "@/components/NinthSection/SectionNine";
import SectionTwo from "@/components/SecondSection/SectionTwo";
import SectionSeven from "@/components/SeventhSection/SectionSeven";
import SectionSix from "@/components/SixthSection/SectionSix";
import SectionThree from "@/components/ThirdSection/SectionThree";
import Nav from '@/components/NavBar/Nav'


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main >  
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <Footer />
      </main>
    </div>
  )
}