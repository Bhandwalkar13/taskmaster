import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get CSRF token first
      await api.get('/csrf/');
      
      // Then login
      const response = await api.post('/login/', credentials);
      onLogin();
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '100px auto', 
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login to TaskMaster</h2>
      
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '15px', 
            borderRadius: '4px', 
            border: '1px solid #ddd',
            fontSize: '14px'
          }}
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '20px', 
            borderRadius: '4px', 
            border: '1px solid #ddd',
            fontSize: '14px'
          }}
        />
        
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#2196f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Login
        </button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>
        Use your Django admin credentials
      </p>
    </div>
  );
};

export default Login;