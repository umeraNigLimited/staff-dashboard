import styled from "styled-components";

// RowFlex component: for a flex container with column direction
export const RowFlex = styled.div`
display: flex;
flex-direction: row;
gap:10px
`

// ColumnFlex component: for a flex container with column direction
export const ColumnFlex = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const AuthRowFlex = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
gap: 2px;
margin-top: 15px;
`

// Auth component: extends ColumnFlex and adds additional styling
export const Auth = styled(ColumnFlex)`
justify-content: space-between;
padding: 30px;
/* position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%); */
width:50vw;
min-width: 300px;
max-width:450px;
background-color: ${({theme})=> theme.colors.white};
border-radius: 5px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

// Label component: styled label element
export const LabelStyle = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

// Input component: styled input element
export const InputStyle = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 16px;

  &::placeholder {
        color: #8c8c8c; 
        font-style: italic; 
        opacity: 0.8; 
    }
`;

export const SelectStyle = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 16px;
  outline: none;
  background-image: url('../../public/arrow.svg');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px;
  -webkit-appearance: none; /* Remove default styling in Safari */
  -moz-appearance: none; /* Remove default styling in Firefox */
  appearance: none; /* Standard property */

  &:focus {
    border-color: #890709; 
    box-shadow: 0 0 5px rgba(137, 7, 9, 0.4);
  }

`;

export const OptionStyle = styled.option`
  padding: 8px;
  font-size: 1rem;
`;

