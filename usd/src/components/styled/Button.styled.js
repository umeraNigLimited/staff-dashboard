import { Link } from "react-router-dom";
import styled from "styled-components";

export const Buttons = styled(Link)`

&.rounded {

}

&.font-semibold {

} 
&.flex {
    display: flex;
} 
&.items-center{
    justify-content:center;
    align-items: center;
} 

&.justify-center {

} 

&.gap-2 {

}

&.auth{
    color: ${(props)=> props.theme.colors.primary};
    background-color: ${(props)=> props.type == 'bg'? 'none': props.theme.colors.white};
    border-radius: 25px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500; 
}
`