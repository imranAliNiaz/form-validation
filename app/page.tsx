
import FormValidation from "./components/formValidation/formValidation"
import Navbar from "./components/navbar/navbar"
export default function Form(){
    return (
        <>
        <Navbar/>
        <h1 className="text-center text-4xl font-bold font-serif mt-3">Form Page</h1>
        <FormValidation/>
        </>
    )
}