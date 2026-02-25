import { useState } from 'react';

export const Auth = ({ onLogin }) => {
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const verify = async () => {
    if (!username.trim() || !otp.trim()) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, username }),
      });

      if (!response.ok) throw new Error('Invalid OTP');

      const data = await response.json();
      if (onLogin) onLogin(data.user);
    } catch (error) {
      console.error('Auth Error:', error);
      alert('Cannot connect to server. Did you start the backend?');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') verify();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">🚀</div>
          <h2>Welcome Back</h2>
          <p>Sign in to NexGen Shop</p>
        </div>

        <div className="auth-form">
          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. mohan"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>

          <div className="input-group">
            <label className="input-label">OTP / Password</label>
            <input
              className="input-field"
              type="password"
              placeholder="e.g. 5678"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button className="btn-login" onClick={verify} disabled={loading}>
            {loading ? 'Verifying…' : 'Sign In →'}
          </button>
        </div>

        <p className="auth-hint">
          💡 Demo credentials — username: <strong>mohan</strong>, OTP: <strong>5678</strong>
        </p>
      </div>
    </div>
  );
};