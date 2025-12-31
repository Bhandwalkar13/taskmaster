import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav style={{
      backgroundColor: '#2196f3',
      padding: '15px 30px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
        TaskMaster
      </Link>
      
      <div>
        {isAuthenticated ? (
          <button onClick={onLogout} style={{
            padding: '8px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Logout
          </button>
        ) : (
          <Link to="/login" style={{
            padding: '8px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;