import React from "react";
import Task from "./Task";

const TaskPanel = () => {
  return (
    <div className="flex flex-wrap justify-center w-11/12 bg-yellow-200 m-auto">
      <div className="type-a border-4 w-1/5">
        <Task type={"a"} />
      </div>
      <div className="type-b border-4 w-1/5">
        <Task type={"b"} />
      </div>
      <div className="type-c border-4 w-1/5">
        <Task type={"c"} />
      </div>
      <div className="type-d border-4 w-1/5">
        <Task type={"d"} />
      </div>
      <div className="type-e border-4 w-1/5">
        <Task type={"e"} />
      </div>
    </div>
  );
};

export default TaskPanel;
