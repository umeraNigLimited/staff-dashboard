import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  /* border: 2px solid ${({theme})=> theme.colors.gray}; */
  border: 2px solid rgb(140,140,140,0.5);
  border-radius: 50%;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:checked {
    background-color: #890709;
  }

  &:checked::after {
    content: '✔';
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
  }
`;