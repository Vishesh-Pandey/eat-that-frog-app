import { useEffect, useState } from "react";
import "./App.css";
import TaskPanel from "./components/TaskPanel";

function App() {
  return (
    <>
      <h1 className="w-11/12 m-auto p-4 ">Eat Tha Frog - Todos</h1>
      <TaskPanel />
    </>
  );
}

export default App;
