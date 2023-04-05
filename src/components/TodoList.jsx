import React from "react";
import "./TodoList.css";
import cross from "../assets/icon-cross.svg";

function TodoList(props) {
  return (
    <div className="container">
      <section className={props.changeMode ? "listDark" : "listLight"}>
        <ul>
          {props.todoList.map((todo) => (
            <li key={todo.id}>
              <div className={todo.completed ? "gradient" : ""}>
                <input
                  className="checkbox-round"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => props.isComplete(todo.id)}
                />
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
    </div>
  );
}

export default TodoList;
