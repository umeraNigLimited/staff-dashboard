import React from "react";
import { ControlButtonContainer } from "./styled/ControlButton.styled";

function ControlButton({ title, onClick, disabled }) {
  return (
    <ControlButtonContainer
      $title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </ControlButtonContainer>
  );
}

export default ControlButton;
