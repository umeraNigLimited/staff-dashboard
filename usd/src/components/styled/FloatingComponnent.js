import styled from "styled-components";
import { BsChatSquareDots } from "react-icons/bs";
import { motion } from "framer-motion";


export const FloatingContainer = styled.div`
      position: fixed;
    bottom: 50px;
    right: 20px;
`

export const FloatingNotify = styled.div`
  position: absolute;
  top: 0
`

export const FloatingChat = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({theme})=> theme.colors.primary}; 
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1); /* Slight enlarge on hover */
  }
`
export const FloatingIcon = styled(BsChatSquareDots)`
`
