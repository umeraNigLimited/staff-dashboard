import React, {useState, useEffect} from 'react'
import { Clock } from './styled/TickingClock';


function TickingClock() {
    const [time, setTime] = useState("");

    const updateClock = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true, // Enables 12-hour format with AM/PM
        });
        setTime(timeString); // Update state
      };

      useEffect(() => {
        updateClock(); // Initialize clock immediately
        const interval = setInterval(updateClock, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup on component unmount
      }, []);

  return (
    <Clock>{time}</Clock>
  )
}

export default TickingClock