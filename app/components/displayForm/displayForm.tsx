import { contactInfoType } from "@/app/types/commonTypes";

export default function DisplayForm(props: {contactData: contactInfoType[]}){
    return(
        <>
       <h1 className="text-black font-serif font-extrabold ml-72 text-3xl">
        Display Information
      </h1>

      <div>
        <table className="min-w-full border border-gray-300">
           <thead>
            <tr className="bg-gray-100">
            <th className="py-2 px-4 border">First Name</th>
            <th className="py-2 px-4 border">Last Name</th>
            <th className="py-2 px-4 border">Father Name</th>
            <th className="py-2 px-4 border">Mother Name</th>
            <th className="py-2 px-4 border">Age</th>
            <th className="py-2 px-4 border">School</th>
            <th className="py-2 px-4 border">College</th>
            <th className="py-2 px-4 border">University</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone Number</th>
            <th className="py-2 px-4 border">Message</th>
            </tr>
           </thead>
           <tbody>
           {props.contactData.map((item, index) => (
      <tr key={index} className="bg-white">
        <td className="py-2 px-4 border">{item.first_name}</td>
        <td className="py-2 px-4 border">{item.last_name}</td>
        <td className="py-2 px-4 border">{item.father_name}</td>
        <td className="py-2 px-4 border">{item.mother_name}</td>
        <td className="py-2 px-4 border">{item.age}</td>
        <td className="py-2 px-4 border">{item.school}</td>
        <td className="py-2 px-4 border">{item.college}</td>
        <td className="py-2 px-4 border">{item.university}</td>
        <td className="py-2 px-4 border">{item.email}</td>
        <td className="py-2 px-4 border">{item.phone}</td>
        <td className="py-2 px-4 border">{item.message}</td>
      </tr>
    ))}
           </tbody>
        </table>
      </div>
        </>
    );
}