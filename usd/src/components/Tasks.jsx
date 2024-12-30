import React, { useState, useEffect } from "react";
import { MyTasks } from "./styled/StyledTable";
import Table from "./Table";
import { Span } from "./styled/Text";
import TasksCheck from "./TasksCheck";
import Dropdown from "./Dropdown";
import Buttons from "./Buttons";
import Icon from "./icons/Icon";
import { AddIcon, IconText } from "./icons/Icons";

import { d } from "../../d.js";
import ControlButton from "./ControlButton.jsx";
import { SharedRowFlex } from "./styled/Shared.js";
import { CBContainer } from "./styled/ControlButton.styled.js";
import { BsPlus } from "react-icons/bs";

const columns = [
  {
    header: "Tasks",
    accessorKey: "task",
    cell: (info) => {
      // console.log(info);
      return <TasksCheck task={info.row.original} />;
    },
    size: "60%",
  },
  {
    header: "Priority",
    accessorKey: "priority",
    cell: (info) => <Dropdown />,
    size: "20%",
  },
  {
    header: "Date Due",
    accessorKey: "due_date",
    size: "20%",
  },
];

export default function Tasks({ name }) {
  const [tasks, setTasks] = useState([...d]);
  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
    priority: "",
    due_date: "",
    status: "incomplete",
  });

  useEffect(() => {
    console.log("Task was added so it reloaded");
  }, [tasks]);

  return (
    <MyTasks>
      <SharedRowFlex className="homeTask">
        <Span>{name}</Span>
        <Buttons icon={<BsPlus />} />
      </SharedRowFlex>
      <Table columns={columns} tasks={tasks} key={tasks.length} />
    </MyTasks>
  );
}
