import React, { useMemo, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { SharedRowFlex } from "./styled/Shared";
import Icon from "./icons/Icon";
import { AddIcon, IconText } from "./icons/Icons";
import { CBContainer } from "./styled/ControlButton.styled";
import ControlButton from "./ControlButton";

function Table({ columns, tasks }) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState([]);
  const [myTasks, setMyTasks] = useState(tasks || []); // Handle undefined tasks
  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
    priority: "",
    due_date: "",
    status: "incomplete",
  });

  function addTask() {
    setMyTasks((prev) => {
      const updatedTasks = [...prev, newTask];
      console.log("Task was added:", updatedTasks);
      return updatedTasks;
    });
  }

  function nextPage() {}

  const data = useMemo(() => myTasks, [myTasks]);

  const table = useReactTable({
    data,
    columns,
    // pageCount: -1,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    autoResetPageIndex: false,
    onPaginationChange: setPagination,
    state: {
      pagination,
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    // onPageIndexChange: (newPageIndex) => {
    //   console.log("Page Index Updated:", newPageIndex);
    //   setPagination((prev) => {
    //     pageIndex: newPageIndex, prev.pageSize;
    //   });
    // },
  });

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}{" "}
                  {{ asc: "▲", desc: "▼" }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    width: `${cell.column.columnDef.size || "auto"}px`,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SharedRowFlex className="task-control">
        {/* <Icon onClick={addTask}>
          <AddIcon />
          <IconText>Add</IconText>
        </Icon> */}
        <ControlButton
          title="Previous"
          disabled={!table.getCanPreviousPage()}
          onClick={() => {
            console.log("Previous clicked");
            console.log(myTasks);
            table.previousPage();
            console.log("After Previous:", table.getState().pagination);
          }}
        />
        <ControlButton
          title="Next"
          //   disabled={!table.getCanNextPage()}
          onClick={() => {
            console.log("Next clicked");
            console.log(myTasks);
            table.nextPage();
            console.log("After Next:", table.getState().pagination);
            const nextPageTable = Array(5).fill({ ...newTask });
            setMyTasks((prev) => [...prev, ...nextPageTable]);
          }}
        />
      </SharedRowFlex>
    </div>
  );
}

export default Table;
