import styled from "styled-components";
import { Link } from "react-router-dom";
import { SharedRowFlex } from "./Shared";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  /* align-items:center; */
  padding-top: 50px;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.primary};
  /* background-image: url('../../public/bg-usb.png');
background-size: cover;
background-repeat: no-repeat; */
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  /* background-color: rebeccapurple; */
  height: 50%;
  width: 50%;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const NavLink = styled(Link)`
  color: ${(props) =>
    props.type == "bg" ? props.theme.colors.white : props.theme.colors.primary};
  background-color: ${(props) =>
    props.type == "bg" ? "none" : props.theme.colors.white};
  border-radius: 25px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 20px;
  transition: color 0.3s, border-bottom 0.3s;

  /* Hover effect */
  &:hover {
    color: ${(props) =>
      props.type == "bg"
        ? props.theme.colors.primary
        : props.theme.colors.tint};
    background-color: ${(props) =>
      props.type == "bg" ? props.theme.colors.white : "transparent"};
    /* border-bottom: ${({ theme }) => `{2px solid ${theme.colors.gray}}`}; */
    /* border: ${(props) =>
      props.type == "bg"
        ? "none"
        : `{1px solid ${props.theme.colors.white}}`}; */
  }

  /* Active link style */
  &.active {
    color: ${({ theme }) => theme.colors.tint};
    font-weight: bold;
    border-bottom: ${({ theme }) => `{2px solid ${theme.colors.gray}}`};
  }
`;

export const AuthButton = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.type == "bg" ? "none" : props.theme.colors.white};
  border-radius: 25px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
`;

export const NavLinkMiddleContainer = styled(SharedRowFlex)`
  /* background-color: white; */
`;

export const NavLinkRowFlex = styled(SharedRowFlex)`
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  padding: 10px;
  background-color: rgba(27, 1, 1, 0.3);
  width: 350px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const AuthFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 20px;
`;

export const AuthParagraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

export const AuthSpan = styled.span`
  color: rgba(51, 51, 51, 0.7);
`;

export const UmeraLogo = styled.img``;

export const LogoLink = styled(Link)`
  align-self: center;
  background-color: red;
`;

export const AuthLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 50vw;
  min-width: 300px;
  max-width: 450px;
`;

export const AuthLinksMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid white;
  padding-left: 20px;
  font-weight: bold;
`;

export const AuthLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
`;
