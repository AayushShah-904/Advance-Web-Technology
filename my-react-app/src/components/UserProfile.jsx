export default function UserProfile({ user }) {
  if (!user) return <p>No profile data found.</p>;

  return (
    <div className="profile-card" style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
        User Profile
      </h2>
      <div style={{ marginTop: '15px' }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role.toUpperCase()}</p>
        <p><strong>Institution:</strong> {user.college || 'PDPU'}</p>
      </div>
      
      {/* Specific buttons based on role */}
      {user.role === 'student' && (
        <button style={{ marginTop: '10px', padding: '8px 16px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Request Transcript
        </button>
      )}
    </div>
  );
}