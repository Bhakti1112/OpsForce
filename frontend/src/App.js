import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ItemDetailPage from './pages/ItemDetailPage';
import AddItemPage from './pages/AddItemPage';
import AdminPanel from './pages/AdminPanel';
import BrowseItems from './pages/BrowseItems';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/item/:id" element={<ItemDetailPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/browse" element={<BrowseItems />}/>
        <Route path="/item/:id" element={<ItemDetailPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
