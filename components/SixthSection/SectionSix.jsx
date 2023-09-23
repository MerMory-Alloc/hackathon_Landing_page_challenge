import Star from "../utils/Star";
import TimlineItem from "./TimlineItem";

const SectionSix = () => {

    const timelineList = [
        {
            title:"Hackathon Announcement",
            text:"The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
            date:"November 18, 2023",
        },
        {
            title:"Teams Registration begins",
            text:"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
            date:"November 18, 2023",
        },
        {
            title:"Teams Registration ends",
            text:"Interested Participants are no longer Allowed to register",
            date:"November 18, 2023",
        },
        {
            title:"Announcement of the accepted teams and ideas",
            text:"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
            date:"November 18, 2023",
        },
        {
            title:"Getlinked Hackathon 1.0 Offically Begins",
            text:"Accepted teams can now proceed to build their ground breaking skill driven solutions",
            date:"November 18, 2023",
        },
        {
            title:"Demo Day",
            text:"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
            date:"November 18, 2023",
        },
        
    ];
  return (
    <section className="flex flex-col justify-center items-center pt-[80px] xl:px-32"
             id="timeline">
        <div className="text-center">
            <h2 className="section_title mb-[20px] xl:mb-[12px]">
                Timeline
            </h2>
            <p className="text-[14px] leading-[24px] max-w-[335px] xl:max-w-[350px] mb-[56px] xl:mb-[90px]">
                Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
        </div>
        <div className="relative">
            <ol className=" max-w-[335px] xl:max-w-none mx-auto flex flex-col gap-8 xl:gap-3 mb-[72px] xl:mb-[80px]">
               {timelineList.map((item, index) => (
                   <TimlineItem key={index} title={item.title} text={item.text} date={item.date} index={index+1} />
               ))}
            </ol>
            <Star type="v" className="-top-[4%] left-[10%] xl:top-0 xl:left-[20%]"/>
            <Star type="w" className="top-[43%] right-[10%]"/>
            <Star type="wo" className="bottom-[5%] -left-[5%] xl:bottom-[10%] xl:left-0"/>
        </div>
    </section>
  )
}

export default SectionSix