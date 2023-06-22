import React from "react";
import Task from "./Task";

const TaskPanel = () => {
  let taskTypes = ["a", "b", "c", "d", "e"];
  return (
    <div className="w-full">
      <div className="md:flex justify-around w-11/12 bg-pink-300 m-auto py-9">
        <button className="bg-gray-400 hover:bg-white md:w-1/3 w-full">
          All
        </button>
        <div className="flex justify-center bg-pink-400 md:w-1/3 w-full">
          {taskTypes.map((type) => {
            return (
              <button key={type} className="bg-orange-400 w-1/5 hover:bg-white">
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-11/12 bg-slate-100 shadow-lg m-auto py-5 my-5 rounded-lg">
        {taskTypes.map((type) => {
          return (
            <div
              key={type}
              className="type-a border-2 p-1 m-1 border-black lg:w-1/6 md:w-1/3 sm:w-1/2 w-full bg-green-300 rounded-lg"
            >
              <Task type={type} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskPanel;
