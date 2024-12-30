import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { Checkbox } from "./styled/Checkbox";
import { TaskCheckContainer } from "./styled/TaskCheckStyle";
import { TaskInput } from "./styled/StyledTable";

function TasksCheck({ task }) {
  const textareaRef = useRef(null);
  const [tasks, setTask] = useState(task.task);
  const [complete, setComplete] = useState(false);
  const [height, setHeight] = useState("0px"); // State to handle height

  // Adjust the height of the textarea based on content
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "0px"; // Reset height to calculate the full scroll height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    }
  };

  useEffect(() => {
    adjustHeight(); // Adjust height on initial render and when details change
  }, [tasks]);

  const handleComplete = () => {
    // onComplete(tasks.id);
    console.log(tasks.length);
    if (!complete && tasks != "") {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      //PATCH THE STATUS OF EACH TASKS CHECKED
      console.log("You don Complete this Task Oga mi");
    }
    setComplete(!complete);
    // console.log('You Never Finish Shishi Oga mi')
  };

  function handleValue(e) {
    const { value } = e.target;
    setTask(value);
  }

  function handleBlur() {
    console.log("it has been blured");
  }

  return (
    <TaskCheckContainer>
      <Checkbox name="task" onClick={handleComplete} />
      <TaskInput
        as="textarea"
        value={tasks}
        name="task"
        id="task"
        onChange={handleValue}
        ref={textareaRef}
        style={{ height }}
        onBlur={handleBlur}
      />
    </TaskCheckContainer>
  );
}

export default TasksCheck;
