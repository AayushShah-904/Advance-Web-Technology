export const Cart = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {items.length === 0 ? (
        <div className="cart-empty">
          <span className="empty-icon">🛒</span>
          <p>Your basket is empty</p>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        <div className="cart-items">
          {items.map((item, idx) => (
            <div key={idx} className="cart-item">
              <span className="cart-item-name">{item.emoji || '📦'} {item.name}</span>
              <span className="cart-item-price">Rs.{item.price}</span>
              <button className="btn-remove" onClick={() => onRemove(idx)}>✕ Remove</button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total ({items.length} item{items.length > 1 ? 's' : ''})</span>
            <span className="cart-total-amount">Rs.{total}</span>
          </div>
          <button className="btn-checkout" onClick={onCheckout}>
            💳 Checkout — Rs.{total}
          </button>
        </div>
      )}
    </>
  );
};