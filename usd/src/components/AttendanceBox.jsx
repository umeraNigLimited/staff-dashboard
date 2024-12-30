import React, { useState, useEffect } from "react";
import {
  AttendanceButton,
  AttendanceColumn,
  AttendanceContainer,
  AttendanceRow,
  AttendanceText,
} from "./styled/AttendanceBoxStyle";
import { BsAlarm, BsCupHot, BsArrowBarRight } from "react-icons/bs";
import { Day } from "./styled/Greeting";
import Buttons from "./Buttons";
import TickingClock from "./TickingClock";

function AttendanceBox() {
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
    <AttendanceContainer>
      <AttendanceRow>
        <AttendanceText>Clock In/ Out</AttendanceText>
      </AttendanceRow>
      <AttendanceRow className="current-date">
        <BsAlarm />
        <Day>{`Clock ${date}`}</Day>
      </AttendanceRow>
      <AttendanceRow>
        <AttendanceColumn className="clocking-time">
          <AttendanceText>Clock In</AttendanceText>
          <Day>08:02 am</Day>
        </AttendanceColumn>

        <AttendanceColumn className="clocking-time">
          <AttendanceText>Clock Out</AttendanceText>
          <Day>-</Day>
        </AttendanceColumn>
      </AttendanceRow>
      {/* <AttendanceRow>
        <AttendanceColumn>
          <AttendanceText>Lunch Break</AttendanceText>
          <AttendanceText>1:00 - 2:00pm</AttendanceText>
        </AttendanceColumn>
      </AttendanceRow> */}
      <AttendanceRow className="clock">
        <AttendanceColumn className="current-time">
          <TickingClock />
          <AttendanceText>Current time</AttendanceText>
        </AttendanceColumn>
        <AttendanceColumn className="current-time">
          <Day>-</Day>
          <AttendanceText>Break time</AttendanceText>
        </AttendanceColumn>
      </AttendanceRow>
      <AttendanceRow className="clocking-button">
        <Buttons
          label="Clock Out"
          icon={<BsArrowBarRight />}
          className="clock-out"
        />
        <Buttons
          label="Start Break"
          icon={<BsCupHot />}
          className="start-break"
          variant="btn-with-bg"
        />
      </AttendanceRow>
    </AttendanceContainer>
  );
}

export default AttendanceBox;
