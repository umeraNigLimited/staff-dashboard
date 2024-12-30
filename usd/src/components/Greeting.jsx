import React, { useEffect, useState } from "react";
import {
  GreetingContainer,
  GreetingStyledText,
  GreetingText,
  GreetingTextContainer,
  Day,
  InfoOnTask,
} from "./styled/Greeting";
import TickingClock from "./TickingClock";

function Greeting() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const time = new Date();
    const formattedDate = time.toLocaleDateString("en-US", {
      weekday: "short", // "Mon"
      month: "long", // "July"
      day: "numeric", // "7"
    });
    setDate(formattedDate);
  }, []);

  return (
    <GreetingContainer>
      <GreetingText>Hello, Oluwabukola!</GreetingText>
    </GreetingContainer>
  );
}

export default Greeting;
