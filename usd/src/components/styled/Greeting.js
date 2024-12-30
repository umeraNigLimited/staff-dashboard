import styled from "styled-components";
import { Span } from "./Text";

export const GreetingContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    min-width:50px;
    max-width:450px
`

export const GreetingTextContainer = styled.div`
   display:flex;
   flex-direction: column;
`

export const GreetingText = styled(Span)`
    font-size: 2rem;
    font-weight: 600;
`

export const GreetingStyledText = styled(GreetingText)`
    color: ${({theme})=> theme.colors.primary}
`
export const Day = styled(Span)`
color: ${(props)=>props.theme.colors.gray };
    font-size: 1.2rem;
    font-weight: 500
`

export const InfoOnTask = styled(Day)`
`
