import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Checking credentials...");

    const response = await fetch('http://localhost:5000/api/login', {
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
  <div className="container">
    <h2>PDPU Portal</h2>
    <p>Sign in to access your dashboard</p>
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        placeholder="Email Address" 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Login</button>
    </form>
    
    {msg && (
      <div className={`status-msg ${msg.includes('Success') ? 'success' : 'loading'}`}>
        {msg}
      </div>
    )}
  </div>
);
}