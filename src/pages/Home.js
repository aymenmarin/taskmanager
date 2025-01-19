import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

function Home() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default Home;
