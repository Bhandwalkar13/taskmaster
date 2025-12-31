import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks. Please login.');
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, taskData);
        setEditingTask(null);
      } else {
        await createTask(taskData);
      }
      fetchTasks();
      setError('');
    } catch (err) {
      setError('Failed to save task.');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(id);
        fetchTasks();
      } catch (err) {
        setError('Failed to delete task.');
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
      <h1>My Tasks</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <TaskForm 
        onSubmit={handleCreateTask} 
        editingTask={editingTask}
        onCancel={handleCancelEdit}
      />
      
      <TaskList 
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default Home;