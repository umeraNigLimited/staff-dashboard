import React, { useEffect, useRef, useState } from 'react';
import { ChatsContainer, ChatsContent, ChatsInfo } from './styled/Chats';

function Chats({ time, name, picture, details, direction }) {
  const textareaRef = useRef(null);
  const [content, setContent] = useState(details); // Controlled value for the textarea
  const [height, setHeight] = useState('auto'); // State to handle height

  // Adjust the height of the textarea based on content
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to calculate the full scroll height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    }
  };

  useEffect(() => {
    adjustHeight(); // Adjust height on initial render and when details change
  }, [content]);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <ChatsContainer>
      <ChatsContent
        as="textarea" // Ensure the styled component is a textarea
        ref={textareaRef}
        value={content} // Controlled content
        // onChange={handleInputChange}
        disabled={true}
        style={{ height }} // Dynamically adjust height
      />
      <ChatsInfo>{/* Additional info like time, name, etc., can go here */}</ChatsInfo>
    </ChatsContainer>
  );
}

export default Chats;
