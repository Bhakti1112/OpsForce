import React, { useEffect, useState } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

const cardColor = '#436369';
const bodyColor = '#d5cabd';

const BrowseItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = bodyColor;
    API.get('/items')
      .then(res => setItems(res.data))
      .catch(() => setItems([]));
    // Cleanup body color on unmount
    return () => { document.body.style.background = null; };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <style>{`
        .item-card {
          background: ${cardColor};
          color: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(67,99,105,0.15);
          padding: 1.5rem;
          width: 220px;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .item-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(67,99,105,0.25);
        }
        .item-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
          background: #fff;
        }
        .item-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .item-status {
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .view-btn {
          background: #fff;
          color: ${cardColor};
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .view-btn:hover {
          background: #d5cabd;
          color: #222;
        }
      `}</style>
      <h2 style={{ color: cardColor, textAlign: 'center', marginBottom: '2rem', fontSize: '2.2rem' }}>Browse Items</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {items.map(item => (
          <div className="item-card" key={item._id} onClick={() => navigate(`/item/${item._id}`)}>
            <img className="item-img" src={item.images?.[0] || 'https://via.placeholder.com/200'} alt={item.title} />
            <div className="item-title">{item.title}</div>
            <div className="item-status">Status: {item.status}</div>
            <button className="view-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseItems;