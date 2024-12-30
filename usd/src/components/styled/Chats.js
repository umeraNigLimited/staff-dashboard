import styled from "styled-components";

export const ChatsContainer = styled.div`
    display: flex;
    flex-direction:column;
`

export const ChatsContent = styled.textarea`
    padding: 10px;
    border: none;
    resize: none;
    outline: none;
    font-size: 1rem;
    background-color: white;
    width:70%;
    padding:10px;
  /* max-height: 300px; */
    word-wrap: normal;
    overflow-y: auto;
`

export const ChatsInfo = styled.div`
 display: flex;
`