import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Checking credentials...");

    const response = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      setMsg(`Success! Identified as ${data.user.role}. Redirecting...`);
      // Wait a moment so user can see the message
      setTimeout(() => {
        onLoginSuccess(data.user);
      }, 1500);
    } else {
      setMsg("Login Failed: User not found.");
    }
  };

  return (
  <div className="auth-wrapper">
    <div className="card">
      <h1 className="h-title">PDPU Portal</h1>
      <p className="sub-title">Enter your credentials to manage your internship & NOC requests.</p>
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="label">Email Address</label>
          <input 
            className="input-field" 
            type="email" 
            placeholder="name@university.edu" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input 
            className="input-field" 
            type="password" 
            placeholder="••••••••" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="btn-primary" type="submit">Sign In</button>
      </form>
      {msg && <p style={{ marginTop: '1rem', color: '#4f46e5', fontWeight: '500' }}>{msg}</p>}
    </div>
  </div>
);
}