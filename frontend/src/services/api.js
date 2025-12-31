import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token c739c8143cfc1af6440cf143c657368e4d7d6c47',
  },
});

export const getTasks = () => api.get('/tasks/');
export const createTask = (task) => api.post('/tasks/', task);
export const updateTask = (id, task) => api.put(`/tasks/${id}/`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}/`);

export default api;
