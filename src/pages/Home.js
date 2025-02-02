import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Basics', completed: false },
    { id: 2, text: 'Understand JSX', completed: true },
    { id: 3, text: 'Build Components', completed: false }
  ]);

  const [filter, setFilter] = useState('all');

  const addTask = (taskText) => {
    const newTask = { id: tasks.length + 1, text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'unfinished') return !task.completed;
    return true;
  });

  return (
    <div className="home-container">
      <TaskForm addTask={addTask} />
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('unfinished')}>Unfinished</button>
      </div>
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
}

export default Home;
