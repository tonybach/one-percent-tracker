import React from "react";

export default function TaskList({ tasks }) {
  const taskList = tasks.map((task) => <li>{task}</li>);
  return <ul>{taskList}</ul>;
}
