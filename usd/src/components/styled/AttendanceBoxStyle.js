import styled from "styled-components";
import { SharedRowFlex, SharedColumnFlex } from "./Shared";
import { Span } from "./Text";

export const AttendanceContainer = styled(SharedColumnFlex)`
  background-color: white;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  gap: 20px;
  padding: 20px;
  flex: 1;
`;

export const AttendanceRow = styled(SharedRowFlex)`
  &.current-date {
    align-items: center;
  }

  &.clock {
    justify-content: space-around;
  }
`;
export const AttendanceColumn = styled(SharedColumnFlex)`
  &.clocking-time {
    background-color: #f9f9f9;
    border: 0.8px solid #333;
    border-radius: 2px;
    width: 50%;
    padding: 8px;
  }

  &.current-time {
    align-items: center;
  }
`;

export const AttendanceText = styled(Span)``;

export const AttendanceButton = styled.button`
  background-color: ${(props) =>
    props.$variant == "check-in"
      ? `${props.theme.colors.accentOpaq}`
      : `${props.theme.colors.hover}`};
  color: ${(props) =>
    props.$variant == "check-in"
      ? `${props.theme.colors.accent}`
      : `${props.theme.colors.primary}`};
`;
