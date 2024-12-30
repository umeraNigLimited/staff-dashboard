import styled from "styled-components";
import { SharedColumnFlex } from "./Shared";
import { NavLink } from "react-router-dom";

export const MyTasks = styled(SharedColumnFlex)`
        gap: 25px;
        background-color: ${({theme}) => theme.colors.white};
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 25px;
        flex:1;
`

export const TaskInput = styled.textarea`
background-color: transparent;
border: none;
font-size:16px;
    width: 100%;
    resize: none; // Prevent manual resizing if not needed
    box-sizing: border-box;
    outline: none;
    transition: height 0.2s ease;
`
