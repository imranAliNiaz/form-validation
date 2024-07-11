"use client";
import { ErrorTypes, contactInfoType,  onChnageEventType , } from "@/app/types/commonTypes";
import { FormEvent, useState } from "react";
import DisplayForm from "../displayForm/displayForm";
import Button from "../button/button";
import * as yup from "yup";




export default function FormValidation() {
  const [contactInfo, setContactInfo] = useState<contactInfoType>({
    first_name: "",
    last_name: "",
    father_name: "",
    mother_name: "",
    age: 0,
    school: "",
    college: "",
    university: "",
    email: "",
    phone: 92,
    message: "",
  });

const contactSchema  = yup.object().shape({
  first_name : yup.string().required(),
  last_name : yup.string().required(),
  father_name : yup.string().required(),
  mother_name : yup.string().required(),
 age : yup.number().positive().required().min(1).max(100),
 school : yup.string().required(),
 college : yup.string().required(),
 university : yup.string().required(),
 email : yup.string().email(),
 phone : yup.number().positive().required(),
 message : yup.string().required(),

})
const [errors , setError] = useState<string[]>([])

  const onChangeHandler = (e: onChnageEventType) => {
    let contactDetail = {
      ...contactInfo,
      [e.target.name]: e.target.value,
    };
    setContactInfo(contactDetail);
    console.log(contactDetail);
  };
  const onSubmitHnadle = (e: FormEvent) =>{
    e.preventDefault();
  }
  const [contactList, setContactList] = useState<contactInfoType[]>([])

  const onClickHandler = async () => {
    try {
  
      await contactSchema.validate(contactInfo);
  
      let newContactList: contactInfoType[] = [...contactList, contactInfo];
      setContactList(newContactList);
      setError([]);
      setContactInfo({
        first_name: "",
        last_name: "",
        father_name: "",
        mother_name: "",
        age: 0,
        school: "",
        college: "",
        university: "",
        email: "",
        phone: 0,
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setError(error.errors);
  
      
  }
  
  };
  


  return (
    <div>
    <div >
      <form className="max-w-md mx-auto grid grid-cols-2 gap-4" onSubmit={onSubmitHnadle}>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="first_name"
            name="first_name"
            value={contactInfo.first_name}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="last_name"
            name="last_name"
            value={contactInfo.last_name}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Father Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="father_name"
            name="father_name"
            value={contactInfo.father_name}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mother Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="mother_name"
            name="mother_name"
            value={contactInfo.mother_name}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Age
          </label>
          <input
            onChange={onChangeHandler}
            type="age"
            id="age"
            name="age"
            value={contactInfo.age}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            School
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="school"
            name="school"
            value={contactInfo.school}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            College
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="college"
            name="college"
            value={contactInfo.college}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            University
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="university"
            name="university"
            value={contactInfo.university}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            onChange={onChangeHandler}
            type="email"
            id="email"
            name="email"
            value={contactInfo.email}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
 onChange={onChangeHandler}
            type="phone"
            id="phone"
            name="phone"
            value={contactInfo.phone}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
          onChange={onChangeHandler}
            id="message"
            name="message"
            value={contactInfo.message}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>
        {errors.map((item)=>{
          return(
            <div>
              <h1>{item}</h1>
            </div>
          )
        })}
        <div>
          <Button  title = "submit" onClicked = {onClickHandler} />
        </div>
      </form>
      <div>
      <DisplayForm contactData={contactList}/>
      </div>
    </div>
    </div>
  );
}
