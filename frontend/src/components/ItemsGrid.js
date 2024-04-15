import React from 'react';

const ItemsGrid = () => {
  // Example data
  const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1', price: 10 },
    { id: 2, name: 'Item 2', description: 'Description for Item 2', price: 20 },
    { id: 3, name: 'Item 3', description: 'Description for Item 3', price: 15 },
    // Add more items as needed
  ];

  return (
    <div className="container">
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">Price: ${item.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
