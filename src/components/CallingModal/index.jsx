import CallingModalHeader from "./CallingModalHeader";
import CallingModalBody from "./CallingModalBody";
import './style.css'

const CallingModal = ({ headerInfo, handleCall, callInfo}) => {
    return (
        <div className="modal-container">
          <CallingModalHeader {...headerInfo} />
          <CallingModalBody handleCall={handleCall} {...callInfo}/>
        </div>
      );
}
 
export default CallingModal;