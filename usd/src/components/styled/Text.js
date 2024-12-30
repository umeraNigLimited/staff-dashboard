import styled from "styled-components";

export const Span = styled.span`
  @media (min-width: 769px) and (max-width: 1377px) {
    &.removeSideBarSpan {
      display: none;
    }
  }
`;

export const Paragraph = styled.p`
  color: ${(props) =>
    props.type == "bg" ? props.theme.colors.white : props.theme.colors.primary};
  text-align: center;
`;

export const Heading1 = styled.h1`
  color: ${(props) =>
    props.type == "bg" ? props.theme.colors.white : props.theme.colors.primary};
  /* font-size: ${(props) => (props.size == "big" ? "80px" : "16px")}; */
`;

export const Heading2 = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  background-color: red;
  margin: 0;
  padding: 0;
`;
