import React from "react";
import "../styles/Tasks.css"

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="task-filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed ✅
      </button>
      <button
        className={filter === "unfinished" ? "active" : ""}
        onClick={() => setFilter("unfinished")}
      >
        Unfinished ❌
      </button>
    </div>
  );
}

export default TaskFilter;
