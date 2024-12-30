import styled from "styled-components";
import { BsPlus, BsColumnsGap,BsJournals,BsInbox,BsBarChart, } from "react-icons/bs";
import { Span } from "../styled/Text";


export const IconContainer = styled.button`
align-items:center;
    display:flex;
    color : ${({theme})=> theme.colors.accent};
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme})=> theme.colors.accentOpaq};
    border-radius: 20px;
    padding: 5px 10px;
    width: 70px;
`

export const AddIcon = styled(BsPlus)`
font-size:20px
`

export const TaskIcon = styled(BsJournals)`
    font-size:20px
`

export const AnnoucementIcon = styled(BsInbox)`

`

export const ReportIcon = styled(BsBarChart)`

`

export const HomeIcon = styled( BsColumnsGap)`

`

export const IconText = styled(Span)`

`