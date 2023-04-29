import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then(() => {
        alert("Todo added");
      })
      .catch((error) => console.log("Error", error));
  };

  const getTodos = () => {
    fetch("http://localhost:3000/api/todos")
      .then((data) => data.json())
      .then((convertedData) => setTodos(convertedData))
      .catch((error) => console.log("Error", error));
  };

  const deleteTodos = (id) => {
    fetch(`http://localhost:3000/api/todos/${id}`, { method: "DELETE" })
      .then(() => {
        alert("Todo deleted");
      })
      .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1 className="w-11/12 m-auto p-4 ">Eat Tha Frog - Todos</h1>

      <div className="bg-slate-300 m-auto my-10 p-10 w-11/12 border-black border-1 flex md:flex-row flex-col justify-between">
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter title"
          className="md:w-1/6 w-full my-2 py-2"
        />
        <input
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          type="text"
          placeholder="Enter todo"
          className="md:w-1/3 w-full my-2 py-2"
        />
        <button
          onClick={addTodo}
          className="bg-green-500 my-2 py-2 rounded-md px-10 hover:bg-green-400 duration-500 md:w-fit w-full"
        >
          Add
        </button>
        <button
          onClick={getTodos}
          className="bg-green-500 my-2 py-2 rounded-md px-10 hover:bg-green-400 duration-500 md:w-fit w-full"
        >
          Fetch latest Todos
        </button>
      </div>

      <div className="bg-slate-300 flex flex-wrap w-11/12 m-auto rounded-md p-10">
        {todos.map((todo, index) => {
          return (
            <div
              key={todo.title}
              className="border-black border-2 p-4 mx-2 rounded-md bg-pink-300 hover:bg-pink-200 transition duration-300 md:w-1/4 sm:w-1/4 w-full my-2"
            >
              <div className="flex justify-between">
                <h3>{todo.title}</h3>
                <button
                  onClick={() => {
                    deleteTodos(todo.id);
                  }}
                  className="bg-red-400 W-1/4 hover:bg-red-500 hover:text-white duration-500 rounded-md p-1"
                >
                  Delete
                </button>
              </div>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
