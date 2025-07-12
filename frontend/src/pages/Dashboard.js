import React, { useEffect, useState, useContext } from 'react';
import { getDashboard, getMyItems } from '../api/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [myItems, setMyItems] = useState([]);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    // Fetch profile
    getDashboard(token)
      .then(res => {
        setProfile(res.data);
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
    // Fetch user's items
    getMyItems(token)
      .then(res => setMyItems(res.data))
      .catch(() => setMyItems([]));
  }, [navigate, setUser]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>Welcome, {profile.username}</h2>
      <p>Email: {profile.email}</p>
      <p>Points: {profile.points}</p>
      <button onClick={handleLogout}>Logout</button>

      <h3>My Listings</h3>
      {myItems.length === 0 ? (
        <p>No items listed yet.</p>
      ) : (
        <ul>
          {myItems.map(item => (
            <li key={item._id}>
              <strong>{item.title}</strong> - {item.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;