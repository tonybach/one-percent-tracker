import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, { useState, useEffect } from "react";

export default function Container() {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <p>{!data ? "Loading..." : data}</p>
    </>
  );
}
