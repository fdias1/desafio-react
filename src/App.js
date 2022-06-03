import React, { useEffect, useState } from "react";
import CallingModalHeader from "./components/CallingModal/CallingModalHeader";
import CallingModalBody from "./components/CallingModal/CallingModalBody";
import CallingModal from "./components/CallingModal";
import useApi from './hooks/useApi'

export default function App() {
  const api = useApi()
  
  const [callInfo, setCallInfo] = useState({})
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    setCallInfo(() => api('get', '/call'))
  },[])

  const handleCall = () => {
    api('post', '/call', callInfo)
  }

  const headerInfo = {
    fromProfilePicture: 'logo192.png', 
    userProfilePicture: 'logo192.png', 
    icon: 'not_answered.webp',
  }

  return (
    <>
        <button onClick={() => setShowModal(() => !showModal)}>
          show modal
        </button>
        {showModal &&
          <CallingModal headerInfo={headerInfo} callInfo={callInfo} handleCall={handleCall}/>
        }
    </>
  );
}



