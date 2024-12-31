import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  /* justify-content: space-between; */
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const SideBarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 30px 10px;
  /* background-color: red; */
  /* border-bottom: ${({ theme }) => `2px solid ${theme.colors.lightGray}`}; */
`;

export const SideBarItemContainer = styled(NavLink)`
  padding: 1.1em;
  align-items: center;
  border-radius: 20px;
  display: flex;
  color: ${({ theme }) => theme.colors.gray};
  flex-direction: row;
  gap: 1vw;

  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
