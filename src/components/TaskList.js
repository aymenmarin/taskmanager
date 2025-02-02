import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
          editTask={editTask} // ✅ Pass editTask properly
        />
      ))}
    </ul>
  );
}

export default TaskList;
