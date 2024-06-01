import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Make sure this matches your Flask server URL
});

export const getTasks = () => api.get('/tasks');
export const addTask = (task) => api.post('/task', task);
export const updateTask = (id, task) => api.put(`/task/${id}`, task);
export const deleteTask = (id) => api.delete(`/task/${id}`);
