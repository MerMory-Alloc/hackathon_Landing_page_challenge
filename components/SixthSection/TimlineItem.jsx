
const TimlineItem = ({title, text, date,index}) => {

  const height_of_linesD = index === 1 ? '137px' : '86px'; 
  return (
    <li className="text-[12px] xl:text-[24px] grid grid-cols-[20px_1fr] gap-x-2 gap-y-1
                  xl:grid-cols-[1fr_53px_1fr] xl:gap-x-24">
      <div className="row-span-2 xl:row-span-1 flex flex-col justify-end items-center gap-1 
                    xl:gap-3 xl:order-2">
        
              {index !== 1 ? (<div className="w-[2px] xl:w-[4px] grow  min-h-[77px] xl:min-h-[86px] bg-[#D434FE]"></div>)
              : (<div className="w-[2px] xl:w-[4px] grow  min-h-[77px] xl:min-h-[137px] bg-[#D434FE]"></div>)}

              <div className="font-bold rounded-full w-[20px] h-[20px] xl:w-[53px] xl:h-[53px]
              bg-gradient-to-r from-[#903AFF] to-[#D434FE] grid place-items-center
              ">
                {index}
              </div>
      </div>
      {
        index % 2 !== 0 ?(
          <div className="flex flex-col gap-1 xl:gap-3 justify-start items-start xl:order-1 
                      xl:justify-end xl:items-end xl:text-right xl:relative xl:top-2">
            <div className="font-bold text-qua">
              {title}
            </div>
            <div className="xl:text-[14px]">
              {text}
            </div>
          </div>
        ) :(
          <div className="flex flex-col gap-1 xl:gap-3 justify-start items-start xl:order-3 
                      xl:justify-end xl:items-start xl:relative xl:top-2">
            <div className="font-bold text-qua">
              {title}
            </div>
            <div className="xl:text-[14px]">
              {text}
            </div>
          </div>
        )
      }

      {
        index % 2 !== 0 ?(
          <div className="font-bold text-qua col-start-2 self-end xl:col-start-auto xl:order-3">
            {date}
          </div>
        ) : (
          <div className="font-bold text-qua col-start-2 xl:text-right self-end xl:col-start-auto xl:order-1">
            {date}
          </div>
        )
      }
      
    </li>
  )
}

export default TimlineItem