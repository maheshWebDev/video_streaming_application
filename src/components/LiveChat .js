import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(30),
        })
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useLayoutEffect(() => {
    const chatContainer = chatContainerRef.current;
    // Scroll to the bottom whenever chatMessages change
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatMessages]);

  return (
    <div className="w-full max-w-[600px] p-2">
      <div
        ref={chatContainerRef}
        className="h-[370px] p-2 border border-gray-300 bg-gray-100 rounded-md overflow-y-scroll flex flex-col-reverse sm:h-[300px]"
      >
        {chatMessages
          .slice()
          .reverse()
          .map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
      </div>
      <form
        className="w-full p-2 border border-gray-300 flex flex-col sm:flex-row items-center"
        onSubmit={(e) => {
          e.preventDefault();
          // Add your logic to handle new messages
          console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Mahesh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-full py-1 border rounded-l-md mb-2 sm:mb-0 sm:mr-2 sm:w-3/4 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none sm:w-1/4"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
