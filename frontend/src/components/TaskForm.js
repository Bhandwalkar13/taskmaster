import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    status: 'todo',
    due_date: ''
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || '',
        description: editingTask.description || '',
        priority: editingTask.priority || 'medium',
        status: editingTask.status || 'todo',
        due_date: editingTask.due_date || ''
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '', priority: 'medium', status: 'todo', due_date: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      
      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        rows="3"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
      >
        <option value="todo">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      
      <input
        type="datetime-local"
        name="due_date"
        value={formData.due_date}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          flex: 1
        }}>
          {editingTask ? 'Update Task' : 'Create Task'}
        </button>
        
        {editingTask && (
          <button type="button" onClick={onCancel} style={{
            padding: '10px 20px',
            backgroundColor: '#757575',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;