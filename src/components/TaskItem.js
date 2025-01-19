import React from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTaskCompletion(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
