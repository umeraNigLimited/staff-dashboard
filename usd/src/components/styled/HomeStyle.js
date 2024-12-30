import styled from "styled-components";
import { SharedColumnFlex, SharedRowFlex } from "./Shared";

export const HomeContainer = styled(SharedRowFlex)`
  align-items: stretch;
  padding: 20px 0;
  overflow-y: scroll;
  gap: 20px;

  @media (min-width: 769px) and (max-width: 1220px) {
    flex-direction: column;
  }
`;

export const HomeRowFlex = styled.div`
  display: ${(props) => props.attendanceAndTasks && "flex"};
  flex-direction: ${(props) => props.attendanceAndTasks && "row"};
`;

export const HomeColumnFlex = styled(SharedColumnFlex)`
  flex: ${(props) => (props.$columnNumber == "1" ? 2 : 1)};
  gap: 50px;
`;

export const HomeSection = styled.div`
  display: flex;
  gap: 20px;
`;
