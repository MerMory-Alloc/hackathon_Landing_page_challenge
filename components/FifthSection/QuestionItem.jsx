

const QuestionItem = ({ question, answer}) => {
    return (
      <details className="pt-4 xl:pt-5 xl:pb-3 list-none   relative after:z-0
                                   after:rounded-full after:absolute after:bottom-2 after:right-0
                                   open:after:content-['-'] after:text-[20px]
                                   after:content-['+'] xl:after:bottom-4
                                   
                                   border-b-[1px] border-qua after:text-qua">
  
              <summary className="list-none max-w-[335px] pr-6 text-[12px] text-left 
                                  xl:text-[14px] mb-2 z-10 relative cursor-pointer xl:max-w-none">
                {question}
              </summary>
              <div className="text-neutral-700 md:text-lg">
                {answer}
              </div>
        </details>
    )
  }
  
  export default QuestionItem