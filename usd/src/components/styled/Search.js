import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid #333; */
  padding: 0 0px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: 1px solid rgb(198, 198, 198);
  border-radius: 5px 0 0 5px;
  padding: 0 10px;
  width: 100%;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #890709; /* Example highlight color */
    box-shadow: 0 0 5px rgba(137, 7, 9, 0.5);
  }

  &::placeholder {
    font-family: "Montserrat", serif;
    font-weight: 400;
    /* color: #aaa; */
    font-size: 16px;
  }
`;
