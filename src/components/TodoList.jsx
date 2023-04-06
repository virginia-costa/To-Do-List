import React, { useState } from "react";
import "./TodoList.css";
import cross from "../assets/icon-cross.svg";
import FiltersTask from "./FiltersTask";
import check from "../assets/icon-check.svg";

function TodoList(props) {
  const [filter, setFilter] = useState("all");

  function filterChange(newFilter) {
    setFilter(newFilter);
  }

  const incompleteTasks = props.todoList.filter(
    (todo) => !todo.completed
  ).length;

  let filteredTodos = props.todoList;
  if (filter === "active") {
    filteredTodos = props.todoList.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = props.todoList.filter((todo) => todo.completed);
  }

  return (
    <div className="container">
      <section className={props.changeMode ? "listDark" : "listLight"}>
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <div className={todo.completed ? "gradient" : ""}>
                <button
                  style={{ width: "20px" }}
                  onClick={() => props.isComplete(todo.id)}
                >
                  <img src={todo.completed && check} alt="" />
                </button>
              </div>
              <label className={todo.completed ? "lined" : ""}>
                {todo.content}
              </label>
              <div className="crossContainer">
                <button
                  className="crossButton"
                  onClick={() => props.deleteTodo(todo.id)}
                >
                  <img src={cross} alt="Cross Icon" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <FiltersTask
        onFilterChange={filterChange}
        changeMode={props.changeMode}
        incompleteTasks={incompleteTasks}
      />
    </div>
  );
}

export default TodoList;
