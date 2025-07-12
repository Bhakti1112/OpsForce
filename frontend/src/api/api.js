import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const register = (data) => API.post('/users/register', data);
export const login = (data) => API.post('/users/login', data);
export const getDashboard = (token) =>
  API.get('/users/dashboard', { headers: { Authorization: `Bearer ${token}` } });
export const getMyItems = (token) =>
  API.get('/users/my-items', { headers: { Authorization: `Bearer ${token}` } });

export default API;