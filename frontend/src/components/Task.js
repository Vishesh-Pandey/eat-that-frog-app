import React, { useEffect, useState } from "react";

const Task = ({ type }) => {
  const [task, setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getTask = async () => {
    const response = await fetch(`http://localhost:3000/api/todos/${type}`);
    const data = await response.json();
    console.log(data);
    console.log(typeof data);
    setTask(data);
  };

  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });
    getTask();
  };

  const addTask = async () => {
    fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, title, description }),
    })
      .then((todo) => {
        alert("Todo added");
      })
      .catch((error) => console.log("Error", error));
    getTask();
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <h1 className="text-lg py-5">Task of type {type}</h1>
      <div className="task-form">
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          className="w-full"
          type="text"
          placeholder="Title"
        />
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          className="w-full"
          type="text"
          placeholder="Description"
        />
        <button onClick={addTask} className="bg-gray-400 w-full">
          Add Task{" "}
        </button>
      </div>
      {task.map((element) => {
        return (
          <div key={element.id} className="bg-grey border-4">
            <h3>
              {element.title}
              <button
                onClick={() => deleteTask(element.id)}
                className="bg-red-400 float-right hover:text-white p-1"
              >
                delete
              </button>
            </h3>
            <p>{element.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Task;
