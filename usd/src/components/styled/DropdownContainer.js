import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  /* display: inline-block; */
  overflow: visible;
  z-index: 9999;
  perspective:100px;
`;

export const DropdownButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: rgba(137,7,9,0.2);
  color: #890709;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  

  &:hover {
    transform-style: preserve-3d;
    transform: translateZ(4px);
    /* background-color: #f5f5f5; */
    border: none;
  }

  &:focus{
    outline: none
  }
`;

export const DropdownContent = styled.ul`
  display: ${(props) => (props.$open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
  padding: 10px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DropdownItem = styled.li`
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
