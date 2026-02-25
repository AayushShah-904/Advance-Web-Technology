const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 1314, emoji: '💻', tag: 'Electronics' },
  { id: 2, name: 'Mouse', price: 100, emoji: '🖱️', tag: 'Accessories' },
  { id: 3, name: 'Keyboard', price: 250, emoji: '⌨️', tag: 'Accessories' },
  { id: 4, name: 'Monitor', price: 899, emoji: '🖥️', tag: 'Electronics' },
  { id: 5, name: 'Headset', price: 349, emoji: '🎧', tag: 'Audio' },
  { id: 6, name: 'Webcam', price: 199, emoji: '📷', tag: 'Accessories' },
];

export const ProductList = ({ onAdd }) => (
  <div className="product-grid">
    {PRODUCTS.map(p => (
      <div key={p.id} className="product-card">
        <div className="product-left">
          <div className="product-emoji">{p.emoji}</div>
          <div>
            <div className="product-name">{p.name}</div>
            <div className="product-tag">{p.tag}</div>
          </div>
        </div>
        <div className="product-right">
          <span className="product-price">Rs.{p.price}</span>
          <button className="btn-add" onClick={() => onAdd(p)}>+ Add</button>
        </div>
      </div>
    ))}
  </div>
);