import React, { useState } from "react";
import "../styles/TaskItem.css";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // Handle edit submit
  const handleEdit = () => {
    editTask(task.id, newText); // ✅ Call editTask properly
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            className="edit-input"
          />
          <button onClick={handleEdit} className="save-btn">Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTask(task.id)}>{task.text}</span>
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
