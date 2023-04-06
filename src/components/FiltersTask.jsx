import React from "react";
import "./FiltersTask.css";

function FiltersTask(props) {
  function filterChange(filter) {
    props.onFilterChange(filter);
  }

  return (
    <div className={props.changeMode ? "filtersDark" : "filtersLight"}>
      <span className="counter">{props.incompleteTasks} items left</span>
      <button onClick={() => filterChange("all")}>All</button>
      <button onClick={() => filterChange("active")}>Active</button>
      <button onClick={() => filterChange("completed")}>Completed</button>
    </div>
  );
}

export default FiltersTask;
