import React, { useState, useEffect } from 'react';
import '../styles/FloatingComponent.css';
import { FloatingChat, FloatingContainer, FloatingIcon, FloatingNotify } from './styled/FloatingComponnent';
import ChatBox from './ChatBox';
import Notify from './Notify';

const msg = [{
  message: 'A lot is Happening Over Here',
  time: new Date(),
  from: 'Gbenga',
  to: 'General Channel',
}];

function FloatingComponent() {
  const [messages, setMessages] = useState(msg);
  const [openChatBox, setOpenChatBox] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    setNotification(!!messages); // Boolean conversion
  }, [messages]);

  useEffect(() => {
    console.log('Chatbox state:', openChatBox);
  }, [openChatBox]);


  function handleChatBox() {
    setOpenChatBox((prevState) => {
      const newState = !prevState; // Calculate the new state
      if (newState === true) {
        setNotification(false); // Clear messages if the chatbox is being closed
      }
      return newState;
    });
  }

  return (
    <>
      {openChatBox && <ChatBox />}
      <FloatingContainer>
      <FloatingNotify>
      {notification && <Notify numberOfNotifiication={1} />}
      </FloatingNotify>
      <FloatingChat onClick={handleChatBox}>
        <FloatingIcon />
      </FloatingChat>
      </FloatingContainer>
    </>
  );
}

export default FloatingComponent;
