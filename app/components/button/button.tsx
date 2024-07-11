import { buttonType } from "@/app/types/commonTypes";

export default function Button(props: buttonType){
    return(
        <div className="mb-6">
           <button
           type="submit"
           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
           onClick={props.onClicked}>
             {props.title}
           </button>
        </div>
    );
}
