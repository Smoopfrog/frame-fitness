import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Box } from '@mui/material';

const Chat = ({ user, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (currentMessage) {
      const messageData = {
        room: "chat",
        username: user.username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessages((prev) => [...prev, messageData])
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", data => {
      setMessages((prev) => [...prev, data])
    })
  }, [socket])

  return (
    <Box className="chat-window" sx={{ left: { xl: '70%', l: '65%', md: '60%', sm: '40%', xs: '25%'}}} >
      <div className="chat-header">
        <p>Chat with an Expert</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
        {messages.map((messageContent) => {
          return (
            <div className="message" id={user.username !== messageContent.username ? "you" : "other"}>
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">
                    {messageContent.time}
                  </p>
                  <p id="author">
                    {messageContent.username}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        </ScrollToBottom>

      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Message"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value)
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </Box>
  )
}

export default Chat;