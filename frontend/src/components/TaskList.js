import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    const colors = { low: '#4caf50', medium: '#ff9800', high: '#f44336' };
    return colors[priority] || '#757575';
  };

  const getStatusBadge = (status) => {
    const badges = { 
      todo: 'To Do', 
      in_progress: 'In Progress', 
      completed: 'Completed' 
    };
    return badges[status] || status;
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999' }}>No tasks yet. Create your first task!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} style={{
            border: '1px solid #ddd',
            borderLeft: `4px solid ${getPriorityColor(task.priority)}`,
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '5px',
            backgroundColor: '#fff'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{task.title}</h3>
            <p style={{ color: '#666', margin: '5px 0' }}>{task.description}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <span style={{ 
                padding: '3px 10px', 
                backgroundColor: getPriorityColor(task.priority),
                color: 'white',
                borderRadius: '3px',
                fontSize: '12px'
              }}>
                {task.priority.toUpperCase()}
              </span>
              <span style={{ 
                padding: '3px 10px', 
                backgroundColor: '#2196f3',
                color: 'white',
                borderRadius: '3px',
                fontSize: '12px'
              }}>
                {getStatusBadge(task.status)}
              </span>
            </div>
            <div style={{ marginTop: '15px' }}>
              <button onClick={() => onEdit(task)} style={{
                padding: '8px 15px',
                marginRight: '10px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Edit</button>
              <button onClick={() => onDelete(task.id)} style={{
                padding: '8px 15px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;