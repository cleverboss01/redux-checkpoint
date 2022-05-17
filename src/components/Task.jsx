import React from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

export const Task = () => {
  return (
    <div>
      My ToDo Application!
      <AddTask />
      <ListTask />
    </div>
  );
};
