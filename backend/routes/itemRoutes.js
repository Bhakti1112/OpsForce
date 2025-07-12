import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// AUTH
export const register = (data) => API.post('/users/register', data);
export const login = (data) => API.post('/users/login', data);
export const getDashboard = (token) =>
  API.get('/users/dashboard', { headers: { Authorization: `Bearer ${token}` } });
export const getMyItems = (token) =>
  API.get('/users/my-items', { headers: { Authorization: `Bearer ${token}` } });

// You can also export API as default if you want to use it for other requests
export default API;