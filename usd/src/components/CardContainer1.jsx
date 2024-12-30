import React from "react";
import { CardContainer, CardRow } from "./styled/Card1";
import { Span } from "./styled/Text";
import TickingClock from "./TickingClock";

function CardContainer1({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

export default CardContainer1;
