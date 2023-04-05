import React from "react";
import { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function inputSubmit(event) {
    event.preventDefault();
    const newToDo = {
      id: props.todoList[props.todoList.length - 1].id + 1,
      content: inputValue,
      completed: false,
    };
    props.onAddTodo(newToDo);
    console.log(props.todoList);
    setInputValue("");
  }

  function keyUp(event) {
    if (event.key === "Enter") {
      inputSubmit(event);
    }
  }

  return (
    <form onSubmit={inputSubmit}>
      <input
        className="inputForm"
        type="text"
        value={inputValue}
        onChange={inputChange}
        onKeyUp={() => {
          keyUp;
        }}
      />
    </form>
  );
}

export default TodoForm;
