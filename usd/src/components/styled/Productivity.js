import styled from 'styled-components'
import { SharedColumnFlex, SharedRowFlex } from './Shared'
import { Span } from './Text'

export const ProductivityContainer = styled(SharedColumnFlex)`
padding: 20px;
box-shadow: ${({theme})=> theme.colors.boxShadow};
height: 300px
`
export const ProductivityRowFlex = styled(SharedRowFlex)`
justify-content: space-between

`
export const ProductivityText = styled(Span)`

`