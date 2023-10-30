import { useParams } from "react-router-dom";

function Modal({ children }) {
    return ( 
        <div className="flex items-center fixed inset-0 backdrop-blur-sm">
           <div className="mx-auto">
           {children}
           </div>
        </div>
     );
}

export default Modal
