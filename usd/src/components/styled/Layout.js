import styled from "styled-components";

export const LayoutContainerRowFlex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.shade};
`;

export const LayoutContainerColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LayoutChild = styled.div`
  position: relative;
  width: ${(props) => props.$child == "first" && "250px"};
  flex: ${(props) => props.$child == "second" && "1"};
  border: ${(props) =>
    props.$child == "first"
      ? "none"
      : `2px solid ${props.theme.colors.lightGray}`};
  /* border-radius: ${(props) =>
    props.$hild == "first" ? "none" : "50px 0 0 50px"}; */
  background-color: ${(props) =>
    props.$child == "first"
      ? props.theme.colors.shade
      : props.theme.colors.tint};
  /* background-image: ${(props) =>
    props.child === "first" ? "none" : `url('../../public/pattern.svg')`}; */
  /* height: ${(props) => (props.child == "first" ? "inherit" : "inherit")}; */
  padding: ${(props) => (props.$child == "first" ? "0px" : "30px")};
  overflow-y: ${(props) => (props.$child == "first" ? "hidden" : "auto")};
  transition: width 0.3s ease;

  @media (min-width: 769px) and (max-width: 1377px) {
    width: ${(props) => props.$child == "first" && "80px"};
  }
`;
