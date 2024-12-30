import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa"; // For the dropdown icon

// Styled components
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.tint};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
  transition: all 0.3s ease;

  @media (min-width: 769px) and (max-width: 1377px) {
    width: 50px;
    height: 50px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1377px) {
    &#user-info {
      display: none;
    }
  }
`;

export const UserName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const UserRole = styled.span`
  font-weight: 300;
  color: #333;
`;

export const Status = styled.span`
  font-size: 0.875rem;
  color: gray;
  display: flex;
  align-items: center;
`;

export const OnlineIndicator = styled.span`
  width: 8px;
  height: 8px;
  background-color: green;
  border-radius: 50%;
  margin-right: 6px;
`;

export const DropdownIcon = styled(FaChevronDown)`
  margin-left: 8px;
  color: gray;
`;
