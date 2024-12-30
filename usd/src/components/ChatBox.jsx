import React, {useState} from 'react'
import Picker  from '@emoji-mart/react';
import data from '@emoji-mart/data'
import { ChannelButton, ChatBoxBody, ChatBoxContainner, ChatBoxFooter, ChatBoxHeader, ChatExpandIcon, ChatActions, ChatXIcon, ChatEmojiIcon, ChatFileIcon, ChatInput, ChatSendContainer, ChatSendIcon, ChatChennelText, ChatDownIcon, PickerContainer, ChatBoxMain } from './styled/ChatBoxStyle'
import { Span } from './styled/Text';
import Chats from './Chats';

function ChatBox() {
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [chat, setChat] = useState('');
    const [chatList, setChatList] = useState([]);
    const [chatLengthLong, setchatLengthLong] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    function handlePicker() {
        setPickerVisible(!isPickerVisible); console.log('Emoji clicked', isPickerVisible)
    }

    function handleInputChange (e){
            const {value} = e.target;
            let textLenght = value.length;
            if (textLenght > 36) {
                setchatLengthLong(true)
            } else {
                setchatLengthLong(false)
            }
            setChat(value)
            // console.log(textLenght)
            // console.log("on change")
    }



    function sendChats (){
        if (chat.trim()) {
            setChatList([...chatList, chat]);
            setMessageSent(true);
            setChat(''); 
            setchatLengthLong(false)
          }
    }

  return (
    <ChatBoxMain initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }}  
    exit={{ opacity: 0, y: 50 }}    
    transition={{ duration: 0.5 }}>
    <ChatBoxContainner>
        <ChatBoxHeader>
            <ChannelButton> 
                <ChatChennelText>Report Channel</ChatChennelText>
                <ChatDownIcon/>
            </ChannelButton>
            <ChatActions>
                <ChatExpandIcon/>
                <ChatXIcon/>
            </ChatActions>
        </ChatBoxHeader>

        <ChatBoxBody>
            {messageSent ? chatList.map((item, index)=> <Chats key={index} details={item}/>) : null}
        </ChatBoxBody>

        <ChatBoxFooter>
            <ChatActions>
                <ChatEmojiIcon onClick={handlePicker}/>
                <ChatFileIcon/>
            </ChatActions>
            <ChatInput placeholder='Type Message....' value={chat} onChange={handleInputChange} rows={chatLengthLong ? 3 : 1}/>
            <ChatSendContainer onClick={sendChats}>
                <ChatSendIcon/>
            </ChatSendContainer>
        </ChatBoxFooter>

                            <PickerContainer style={{display : isPickerVisible ? 'block' : 'none'} }>
                            <Picker data={data} previewPosition='none' onEmojiSelect={(e)=> {
                                setChat((prev)=> prev + e.native);
                                setPickerVisible(isPickerVisible);
                                console.log('The picker opened');
                            }}/>
                        </PickerContainer>
    </ChatBoxContainner>
    </ChatBoxMain>
  ) 
}

export default ChatBox