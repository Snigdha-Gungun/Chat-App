import React, { useEffect, useRef } from 'react'
import Messages from './Messages'
import userRecieve from '../../../../hooks/userRecieve'
import useListenMessages from '../../../../hooks/useListenMessages'

function ChatZone() {
  const {loading, message}  = userRecieve()
  useListenMessages()
  const lastbox = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastbox.current?.scrollIntoView({behavior: 'smooth'})
    },100)
  },[message])

  
  if(!message.length){
    return (
      <div className='shadow-xl my-3 h-4/5 flex justify-center items-center text-gray-700 overflow-y-scroll no-scrollbar rounded-lg' style={{background: 'linear-gradient(135deg, #f5ecd7 0%, #ebe0c4 100%)'}}>
        <h1>Start Chatting</h1>
      </div>
    )
  }
  return (
    <div className='shadow-xl my-3 h-4/5 overflow-y-scroll no-scrollbar rounded-lg p-2' style={{background: 'linear-gradient(135deg, #f5ecd7 0%, #ebe0c4 100%)'}}>
        {message.map((mess)=>(
          <div key={mess._id} ref={lastbox}>
            <Messages message={mess}/>
          </div>
        ))}
    </div>
  )
}

export default ChatZone