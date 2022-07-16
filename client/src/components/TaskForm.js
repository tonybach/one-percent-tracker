import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

export default function TaskForm({ tasks, setTasks }) {
  const [textValue, setTextValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, textValue]);
    setTextValue("");
  }

  function handleTaskInput(e) {
    setTextValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="What you did today:"
        variant="outlined"
        value={textValue}
        onChange={handleTaskInput}
      />
      <Button type="submit" variant="contained">
        Track it!
      </Button>
    </form>
  );
}
