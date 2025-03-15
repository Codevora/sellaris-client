"use client";
import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";

import {IoSendSharp} from "react-icons/io5";
import {BiMessageRoundedDots} from "react-icons/bi";

const Popup = ({isVisible, onCLose}) => {
 const [messages, setMessages] = useState([]);
 const [input, setInput] = useState("");

 const sendMessage = (e) => {
  e.preventDefault();
  if (input) {
   setMessages([...messages, {text: input}]);
   setInput("");
  }
 };

 if (!isVisible) return null;
 return (
  <div className="fixed flex flex-col justify-between w-[400px] h-[400px] rounded-lg bottom-20 right-10 bg-white chat-box border-primary">
   {/*Header*/}
   <div className="flex justify-between p-3 w-full bg-primary border border-tertiary rounded-t-lg">
    <h1 className="text-white">Admin Chat</h1>
    <button
     onClick={onCLose}
     className="text-white">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M6 18L18 6M6 6l12 12"
      />
     </svg>
    </button>
   </div>

   {/*Body*/}
   <div className="h-full w-full flex flex-col justify-start bg-gray-200 px-3 py-2">
    <div className="flex items-center gap-1 ">
     <div className="rounded-full bg-primary w-8 h-8 italic flex items-center justify-center text-white ">
      $
     </div>

     <div className="text-start bg-white p-2 rounded-lg border border-primary">
      <h1>Halo Ada yang bisa kami bantu?</h1>
     </div>
    </div>
   </div>

   {/*Messages*/}

   <div className="messages">
    {messages.map((msg, index) => (
     <div
      key={index}
      className="message">
      {msg.text}
     </div>
    ))}
   </div>
   <div className="w-full flex items-center justify-between text-start">
    <form
     onSubmit={sendMessage}
     className=" p-3 flex justify-between w-full">
     <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="input w-full focus:outline-none"
      placeholder="Ketik pesan..."
     />
     <button
      type="submit"
      className="send-button cursor-pointer">
      <IoSendSharp className="text-xl" />
     </button>
    </form>
   </div>
  </div>
 );
};

const LiveChat = () => {
 const pathname = usePathname();
 const [openPopup, setOpenPopup] = useState(false);
 const [liveChat, setLiveChat] = useState(false);

 const togglePopup = () => {
  setOpenPopup(!openPopup);
 };

 return (
  <div className=" w-auto">
   <button
    onClick={togglePopup}
    className={`cursor-pointer border-2 border-primary bg-white gap-4 rounded-full text-primary p-3 fixed bottom-5 right-10 flex items-center justify-center ${
     pathname === "/" ? "animate-pulse" : "animate-none"
    }`}>
    Live Chat Admin <BiMessageRoundedDots className="text-2xl" />
   </button>
   {openPopup && (
    <Popup
     isVisible={openPopup}
     onCLose={togglePopup}
    />
   )}
  </div>
 );
};

export default LiveChat;
