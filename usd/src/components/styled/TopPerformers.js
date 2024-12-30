import styled from "styled-components";
import { SharedColumnFlex, SharedRowFlex } from "./Shared";
import { Span } from "./Text";

export const TopPerformersContainer = styled(SharedColumnFlex)`
background-color:white;
box-shadow: ${({theme}) => theme.colors.boxShadow};
justify-content: space-around;
padding: 20px;
/* gap:20px; */
height: 300px
`

export const TopPerformersRow = styled(SharedRowFlex)`
gap: 20px;
align-items: center
`
export const TopPerformersColumn = styled(SharedColumnFlex)`
`

export const TopPerformersText = styled(Span)`
`

export const TopPerformersPercentage = styled(Span)`
    font-weight: 800;
`
