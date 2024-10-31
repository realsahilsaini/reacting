import React, { useEffect, useRef, useState } from 'react'

function UseRefScroll() {
  // Here we have a chat box that displays messages and a button to add a new message. We want the chat box to scroll to the bottom whenever a new message is added. We can achieve this using the useRef hook to get a reference to the chat box element and the useEffect hook to scroll to the bottom whenever the messages state changes.
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    console.log(chatBoxRef.current.scrollTop);
    console.log(chatBoxRef.current.scrollHeight);
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    
    
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );

}

export default UseRefScroll