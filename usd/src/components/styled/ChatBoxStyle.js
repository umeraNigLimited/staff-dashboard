import styled from "styled-components";
import { BsArrowsAngleExpand, BsX , BsArrowsAngleContract, BsEmojiSmile, BsPaperclip,  BsSend, BsSendFill, BsXLg, BsChevronDown} from "react-icons/bs";
import {motion} from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa'; 
import { Span } from "./Text";

export const ChatBoxMain = styled(motion.div)`
    position: fixed;
    bottom: 90px;
    right: 60px;
    display:flex;
    flex-direction: column;
`


export const ChatBoxContainner = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${({theme})=> theme.colors.white};
    box-shadow: ${({theme})=> theme.colors.boxShadow};
    width: 500px; 
    height: 600px; 
    overflow: hidden;
`

export const ChatBoxHeader = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* height: 100px; */
    flex: 0.1;
    padding: 20px 20px;
    border-bottom: ${({theme})=> `2px solid ${theme.colors.lightGray}`};
    
`
export const ChatBoxBody = styled(ChatBoxContainner)`
    background-color: ${({theme})=> theme.colors.hover};
    gap:20px;
    padding: 30px;
    flex:0.8;
    height: 400px; 
    overflow-y: auto;
    z-index:600;
`

export const ChatBoxFooter = styled(ChatBoxHeader)`
border-top: ${({theme})=> `2px solid ${theme.colors.lightGray}` };
gap:10px;
border-bottom: none;
`


export const ChannelButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #890709;  
  /* color: #333;  */
  color: ${({theme})=> theme.colors.white };
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  gap: 10px;
  transition: background-color 0.3s, box-shadow 0.3s;

  // Add an icon styling for alignment (optional)

  .icon {
    margin-right: 8px;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: rgba(137,7,9,0.9); 
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);  /* Subtle shadow */
  }

  &:active {
    background-color: #d0d0d0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);  /* More defined shadow */
    transform: scale(0.98);  /* Slight press-down effect */
  }
`;

export const ChatChennelText = styled(Span)`
`

export const ChatActions = styled.div`
    display: flex;
    gap:5px
`

export const ChatXIcon = styled(BsXLg)`
  color: ${({theme})=> theme.colors.gray};
  font-size: 1.5rem;
`

export const ChatDownIcon = styled(FaChevronDown)`
  color: ${({theme})=> theme.colors.white};
  font-size: 1rem;

  &:hover {
    
  }
`

export const ChatExpandIcon = styled(BsArrowsAngleExpand)`
  color: ${({theme})=> theme.colors.gray};
  font-size: 1.5rem;
`

export const ChatContractIcon = styled(BsArrowsAngleContract)`
  color: ${({theme})=> theme.colors.gray};
  font-size: 1.5rem;
`

export const ChatEmojiIcon = styled(BsEmojiSmile)`
  color: ${({theme})=> theme.colors.gray};
  font-size: 1.5rem;
`

export const ChatFileIcon = styled(BsPaperclip)`
  color: ${({theme})=> theme.colors.gray};
  font-size: 1.5rem;
  transform: rotateX('100')
`

export const ChatSendIcon = styled( BsSend)`
  color: ${({theme})=> theme.colors.white};
  font-size: 1rem;
`

export const ChatSendContainer = styled.button`
    padding: 10px;
    display: flex;
    align-items: center;
    width:50px;
    width:50px;
    border-radius: 50%;
    background-color: ${({theme})=> theme.colors.primary};

    &:hover {
      outline: none;
      border-color: ${({theme})=> theme.colors.primary};
    }
`

export const ChatInput = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;          
  border-radius: 20px;             
  font-size: 1rem;               
  color: #333;                     
  outline: none;  
  resize: none;                 
  background-color: #f9f9f9;       
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
  transition: border-color 0.2s, background-color 0.2s;

  &:focus {
    border-color: #890709;         
    background-color: #fff;        
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); 
  }

  &::placeholder {
    color: #999;                 
    font-style: italic;    
  }
`;

export const PickerContainer = styled.div`
  display: ${(props)=> props.isPickerVisible ? 'block' : 'none' };
  position: absolute;
  top:-10%;
  right: 40%;
  z-index:1000
`

 