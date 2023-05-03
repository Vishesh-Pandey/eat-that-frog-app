import React, { useEffect, useState } from "react";

const Task = ({ type }) => {
  const [task, setTask] = useState([]);

  const getTask = async () => {
    const response = await fetch(`http://localhost:3000/api/todos/${type}`);
    const data = await response.json();
    console.log(data);
    console.log(typeof data);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <h1 className="text-lg py-5">Task of type {type}</h1>
      {task.map((element) => {
        return (
          <div key={element.id} className="bg-grey border-4">
            <h3>{element.title}</h3>
            <p>{element.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Task;
