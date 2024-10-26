import React, { useState } from 'react'

import { IoCodeSlash, IoSend } from 'react-icons/io5'
import { BiPlanet } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { TbMessageChatbot } from 'react-icons/tb'
import Navbar from './navbar'
import Footer from '../components/Footer'

const TruthMate = () => {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setisResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]); 
  let allMessages = [];

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    }
    else {
      alert("You must write somthing... !")
    }
  };

  
  const generateResponse = async (msg) => {
    if (!msg) return;
    
    const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(msg);
    
    const newMessages = [
      ...messages,
      { type: "userMsg", text: msg },
      { type: "responseMsg", text: result.response.text() },
    ];
    
    setMessages(newMessages); // Append new messages to the existing ones
    setisResponseScreen(true);
    setMessage(""); // Clear the input field after sending the message
    console.log(result.response.text());
  };

  const newChat = () => {
    setisResponseScreen(false);
    setMessages([]); // Clear the messages array
  }

  return (
    <>
      <div className="container w-screen min-h-screen overflow-x-hidden bg-[#00040F] text-white">
        <Navbar />
        {
          isResponseScreen ?
            <div className='h-[80vh]'>
              <div className="header pt-[25px] flex items-center justify-between w-[100vw] px-[300px]">
                <h2 className='text-2xl'>TruthMate</h2>
                <button id='newChatBtn' className='bg-[#181818] p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px]' onClick={newChat}>New Chat</button>
              </div>

              <div className="messages">
              {
                messages?.map((msg, index) => {
                  return (
                    <div key={index} className={msg.type}>{msg.text}</div>
                  )
                })
              }
                {/* <div className="userMsg">You : What is the HTML stand for</div>
                <div className="responseMsg">HTML stand for Hyper Text Markup Language</div> */}
              </div>
            </div> :
            <div className="middle h-[80vh] flex items-center flex-col justify-center">
              <h1 className='text-6xl text-purple-400'>TruthMate</h1>
              <p className='text-3xl lg:text-5xl my-4 mt-1 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Our Personalized ChatBot</p>
              <div className="boxes mt-[30px] flex items-center gap-2">
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#00040F] px-[20px] relative min-h-[20vh] bg-[#00040F] p-[10px] chatbot-box  m-4 w-60 h-12">
                  <p className='text-[18px] text-purple-400 border-purple-400 '>Ask Me Any Question  <br />From
                  across Globe  </p>

                  <i className=' absolute right-3 bottom-3 text-[18px]'><IoCodeSlash /></i>
                </div>
                <div className="card rounded-lg cursor-pointer transition-all px-[20px] relative min-h-[20vh] bg-[#00040F] p-[10px] m-4 w-60 h-12 chatbot-box">
                  <p className='text-[18px ] text-purple-400'>Read any News , Verify<br />
                     the Fact From Our Application <br /> </p>
                 

                  <i className=' absolute right-3 bottom-3 text-[18px]'><BiPlanet /></i>
                </div>

                <div className="card rounded-lg cursor-pointer transition-all px-[20px] relative min-h-[20vh] bg-[#00040F] w-60 h-12  chatbot-box p-[10px] m-4">
                  <p className='text-[18px] text-purple-400'>Solve your Doubts in<br />
                    the Desired Language</p>

                  <i className=' absolute right-3 bottom-3 text-[18px]'><FaPython /></i>
                </div>

                <div className="card rounded-lg cursor-pointer transition-all  px-[20px] relative min-h-[20vh] bg-[#00040F] m-4 chatbot-box w-60 h-12  p-[10px]">
                  <p className='text-[18px] text-purple-400'>How we can use <br />
                    the AI for adopt ?</p>

                  <i className=' absolute right-3 bottom-3 text-[18px]'><TbMessageChatbot /></i>
                </div>
              </div>
            </div>
        }


        <div className="bottom w-[100%] flex flex-col items-center">
          <div className="inputBox w-[60%] text-[15px] py-[7px] flex items-center bg-[#00040F] chatbot-box rounded-[30px]">
            <input value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" className='p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none' placeholder='Write your message here...' id='messageBox' />
            {
              message == "" ? "" : <i className='text-green-500 text-[20px] mr-5 cursor-pointer' onClick={hitRequest}><IoSend /></i>
            }
          </div>
          <p className='text-purple-400 mt-3 mb-8 text-[14px] my-4'>TruthMate is developed by TureMix.Inc  </p>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default TruthMate