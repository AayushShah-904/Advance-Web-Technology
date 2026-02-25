import { useState } from 'react';
import { useShop } from './hooks/useShop';
import { Auth } from './components/Auth';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { EventSummary } from './components/EventSummary';
import './App.css';

function App() {
  const { state, dispatch, performCheckout } = useShop();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username) => {
    dispatch({ type: 'LOGIN', payload: username });
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) return <Auth onLogin={handleLogin} />;

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: state.user }),
      });
    } catch (e) {
      console.error('Logout sync failed:', e);
    } finally {
      dispatch({ type: 'LOGOUT' });
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">🚀</div>
          <h1>NexGen <span>Shop</span></h1>
        </div>
        <div className="user-profile">
          <img
            className="user-avatar"
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(state.user)}&background=6366f1&color=fff&rounded=true`}
            alt="avatar"
          />
          <span className="user-name">{state.user}</span>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="app-content">
        <section className="panel section-product">
          <div className="panel-title">
            <span className="icon">🛍️</span> Product Catalogue
          </div>
          <ProductList onAdd={(p) => dispatch({ type: 'ADD_TO_CART', payload: p })} />
        </section>

        <section className="panel section-cart">
          <div className="panel-title">
            <span className="icon">🛒</span> Your Basket
            {state.cart.length > 0 && (
              <span className="cart-badge">{state.cart.length}</span>
            )}
          </div>
          <Cart
            items={state.cart}
            onRemove={(idx) => dispatch({ type: 'REMOVE_FROM_CART', index: idx })}
            onCheckout={performCheckout}
          />
        </section>

        <section className="panel section-log">
          <div className="panel-title">
            <span className="icon">📊</span> Activity Stream
          </div>
          <EventSummary logs={state.logs} total={state.totalSpent} />
        </section>
      </main>
    </div>
  );
}

export default App;