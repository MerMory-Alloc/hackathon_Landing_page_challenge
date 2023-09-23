'use client'

import  { useForm }  from  "react-hook-form";

const ContactForm = ({display}) => {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const baseUrl = "https://backend.getlinked.ai";

    const onSubmit = (data) => {
        fetch(`${baseUrl}/hackathon/contact-form`, {
            Method: 'POST',
            Headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            Body: JSON.stringify(data),
            Cache: 'default'
          }).then((data) => {
            alert("Your message has been sent! We will make sure that your concern is taken care of. LOL");
          })
    }
  return display === "mobile" ? (
    <form className="flex flex-col gap-[25px]" 
          onSubmit={handleSubmit(onSubmit)}>
            <input name="teams_Name" placeholder="Team’s Name" {...register("teams_Name")}
                className="input" />
            <input name="topic" placeholder="Topic" {...register("topic")} 
                className="input"/>
            <input name="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                className="input"/>
            <textarea name="message" placeholder="Message" {...register("message",{required: true})} 
                      className="input resize-none h-[160px]"/>

            <button type="submit" className="btn w-[172px] mx-auto">Submit</button>
    </form>
  ) : (
    <form className="flex flex-col gap-[40px]" 
          onSubmit={handleSubmit(onSubmit)}>
            <input name="teams_Name" placeholder="First Name" {...register("teams_Name")}
                className="input" />
            <input name="email" placeholder="Mail" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                className="input"/>
            <textarea name="message" placeholder="Message" {...register("message",{required: true})} 
                      className="input resize-none h-[160px]"/>

            <button type="submit" className="btn w-[172px] mx-auto">Submit</button>
    </form>
  )
}

export default ContactForm