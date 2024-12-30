import { Link } from "react-router-dom";
import styled from "styled-components";

export const SharedConntainer = styled.div``;
export const SharedRowFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  &.task-control {
    padding-top: 25px;
    gap: 0px;
    justify-content: space-between;
  }

  &.task-control-button {
    width: 50%;
  }
  &.homeTask {
    justify-content: space-between;
  }

  &.profile-container {
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1377px) {
    &.profile-container > #user-info {
      display: none;
    }
  }
`;

export const SharedColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SharedFullScreenRow = styled(SharedRowFlex)`
  min-height: 100vh;
  min-width: 100vw;
  background-color: red;
`;

export const SharedFullScreenColumn = styled(SharedColumnFlex)`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;

  &.auth-container {
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const ViewStats = styled(Link)``;
