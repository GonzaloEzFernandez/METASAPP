import { useParams } from "react-router-dom";

function Modal({ children }) {
    return ( 
        <div className="flex items-center justify-center fixed inset-0 backdrop-blur-sm ">
           <div className="rounded-xl nm-flat-gray-50 overflow-hidden pt-4 mx-auto w-screen lg:w-[600px] ">
           {children}
           </div>
        </div>
     );
}

export default Modal
