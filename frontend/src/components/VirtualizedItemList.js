import React from 'react';
import { Link } from 'react-router-dom';

const VirtualizedItemList = ({ items, height = 600 }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      maxHeight: height,
      overflow: 'auto'
    }}>
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{
            height: '70px',
            borderBottom: index < items.length - 1 ? '1px solid #e0e0e0' : 'none'
          }}
        >
          <Link
            to={'/items/' + item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              textDecoration: 'none',
              color: '#333',
              transition: 'background-color 0.2s',
              height: '100%',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>{item.name}</div>
              <div style={{ fontSize: '14px', color: '#666' }}>{item.category}</div>
            </div>
            <div style={{ fontWeight: '600', color: '#007bff' }}>
              ${item.price.toLocaleString()}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VirtualizedItemList;
