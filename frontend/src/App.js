import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = () => {
      fetch("http://localhost:3000/api/todos")
        .then((data) => data.json())
        .then((convertedData) => setTodos(convertedData))
        .catch((error) => console.log("Error", error));
    };
    getTodos();
  }, []);

  return (
    <>
      <h1 className="w-11/12 m-auto p-4">Eat Tha Frog - Todos</h1>
      <div className="bg-slate-300 flex flex-wrap w-11/12 m-auto rounded-md p-10">
        {todos.map((todo, index) => {
          return (
            <div className="border-black border-2 p-4 mx-2 rounded-md bg-pink-300 hover:bg-pink-200 transition duration-300">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
