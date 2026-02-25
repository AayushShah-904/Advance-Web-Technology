import UserProfile from './UserProfile';

export default function StudentDashboard({ user ,onLogout}) {
  return (
    <div>
      <header className="nav-bar">
        <span style={{ fontWeight: 800, color: '#4f46e5' }}>PDPU CONNECT</span>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span>Welcome, <strong>{user?.name}</strong></span>
          <button style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }} className="btn-primary">Logout</button>
        </div>
      </header>

        
      <main className="dashboard-container">
        <div className="card" style={{ maxWidth: 'none' }}>
          <h2 className="h-title">Student Overview</h2>
          <p>Tracking your status for summer research at IITs and BITS.</p>
          <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '1.5rem 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ margin: 0 }}>Active Projects</h3>
              <p style={{ fontSize: '0.9rem' }}>NexGen AI Talent Matcher</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ margin: 0 }}>NOC Status</h3>
              <p style={{ fontSize: '0.9rem', color: '#4f46e5' }}>Pending Faculty Approval</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Clear state in the parent (App.jsx)
    onLogout();
    console.log("User session cleared.");
  };

  return (
    <button 
      onClick={handleLogout}
      className="btn-logout"
    >
      Sign Out
    </button>
  );
};