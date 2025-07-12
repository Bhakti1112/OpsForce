import React from 'react';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
  // Example static data; replace with API data later
  { id: 1, title: 'Red Dress', image: 'https://via.placeholder.com/100', status: 'available' },
  { id: 2, title: 'Blue Jeans', image: 'https://via.placeholder.com/100', status: 'available' },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to ReWear</h1>
      <p>Exchange unused clothing and promote sustainable fashion!</p>
      <button onClick={() => navigate('/register')}>Start Swapping</button>
      <button onClick={() => navigate('/dashboard')}>List an Item</button>
      <button onClick={() => navigate('/browse')}>Browse Items</button>

      <h2>Featured Items</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {featuredItems.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={item.image} alt={item.title} width={100} />
            <h4>{item.title}</h4>
            <p>Status: {item.status}</p>
            <button onClick={() => navigate(`/item/${item.id}`)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;