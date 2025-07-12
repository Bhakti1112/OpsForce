import React from 'react';

const product = {
  name: 'Red Dress',
  description: `This is a beautiful red dress, perfect for any occasion. Made from sustainable materials and gently used. Size M.`,
  mainImage: 'https://via.placeholder.com/250x320',
  images: [
    'https://via.placeholder.com/100x140',
    'https://via.placeholder.com/100x140',
    'https://via.placeholder.com/100x140',
    'https://via.placeholder.com/100x140',
  ],
};

const ItemDetailPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #eee' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '2rem' }}>ReWear</div>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search for items..."
            style={{ width: '100%', padding: '0.5rem', borderRadius: '20px', border: '1px solid #ccc' }}
          />
        </div>
        <button style={{ marginLeft: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', border: 'none', background: '#eee' }}>
          🔍
        </button>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1000, margin: '2rem auto', display: 'flex', gap: '2rem' }}>
        {/* Product Image */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 350 }}>
          <img src={product.mainImage} alt="Product" style={{ width: 250, height: 320, objectFit: 'cover', borderRadius: 10 }} />
        </div>
        {/* Product Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <h2 style={{ margin: '0 0 1rem 0' }}>{product.name}</h2>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px #ddd', padding: '1rem', minHeight: 180 }}>
            <p style={{ margin: 0, fontSize: 16, color: '#444', whiteSpace: 'pre-line' }}>{product.description}</p>
          </div>
        </div>
      </div>

      {/* Product Images Row */}
      <div style={{ maxWidth: 1000, margin: '1rem auto 0 auto' }}>
        <div style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>Product Images</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {product.images.map((img, idx) => (
            <div key={idx} style={{ width: 100, height: 140, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={img} alt={`Product ${idx + 1}`} style={{ width: 90, height: 130, objectFit: 'cover', borderRadius: 8 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
