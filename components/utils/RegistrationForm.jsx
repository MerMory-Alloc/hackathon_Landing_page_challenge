'use client'

import  { useForm }  from  "react-hook-form"; 
import { useState, useEffect } from "react";
import Modal from "./Modal";

const RegistrationForm = ({categoriesList}) => {
    const [opened, setOpened] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        if (opened){
            document.body.style.overflow = "hidden";
        }
        else
          document.body.style.overflow = "scroll"
        return () => (document.body.style.overflow = "scroll");
    }, [opened]);

    const { register, handleSubmit, formState:{errors} } = useForm();

    const baseUrl = "https://backend.getlinked.ai";

    const onSubmit = (data) => {
        fetch(`${baseUrl}/hackathon/registration`, {
            Method: 'POST',
            Headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            Body: JSON.stringify(data),
            Cache: 'default'
          }).then((data) => {
            setScrollY(window.scrollY);
            setOpened(true);
          })
    }

  return (
    <div>
        {opened && (
            <Modal onClick={() => setOpened(false)} yaxi={scrollY} />
        )}
    <form id="register" className="w-full grid grid-cols-1 gap-[18px] text-[13px] mb-6 
                    xl:text-[14px] xl:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}>

            <label>
                <p className="mb-[6px]">Team’s Name</p>
                <input name="teams_Name" placeholder="Enter the name of your group" 
                        {...register("teams_Name", { required: true })} 
                        className="input2 pl-[18px] py-[13px] w-full" />
            </label>
            <label>
                <p className="mb-[6px]">Phone</p>
                <input name="phone" placeholder="Enter your phone number" 
                        {...register("phone", { required: true })} 
                        className="input2 pl-[18px] py-[13px] w-full" />
            </label>
            <label>
                <p className="mb-[6px]">Email</p>
                <input name="email" placeholder="Enter your email address" 
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                        className="input2 pl-[18px] py-[13px] w-full" />
            </label>
            <label>
                <p className="mb-[6px]">Project Topic</p>
                <input name="project" placeholder="What is your group project topic" 
                        {...register("project", { required: true })} 
                        className="input2 pl-[18px] py-[13px] w-full" />
            </label>
            <div className="grid grid-cols-[1.3fr_.7fr] gap-[18px] xl:col-span-2
                            xl:grid-cols-[1fr_1fr]">
                <label>
                    <p className="mb-[6px]">Category</p>
                    <select name="category" {...register("category", { required: true })}
                            className="input2 px-2 py-3 w-full">
                        <option value="">Select your category</option>
                        {categoriesList.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <p className="mb-[6px]">Group Size</p>
                    <select name="group_size" {...register("group_size", { required: true })} 
                            className="input2 py-3 px-2  w-full">
                        <option value="">Select</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                    </select>
                </label>
            </div>
            <p className="text-err text-[9px] xl:text-[12px] italic xl:col-span-2">
                Please review your registration details before submitting
            </p>
            <label className="flex items-start gap-2 xl:col-span-2">
                <input type="checkbox"  name="terms" {...register("terms", { required: true })}
                       className="checkbox" />
                <p className="text-[10px] xl:text-[12px] ">
                    I agreed with the event terms and conditions and privacy policy
                </p>
            </label>
            <button type="submit" className="btn mx-auto w-[172px] xl:hidden">
                Submit
            </button>
            <button type="submit" className="hidden xl:col-span-2 xl:btn xl:mx-auto xl:w-full xl:block">
                Register Now
            </button>
    </form>
    </div>
  )
}

export default RegistrationForm