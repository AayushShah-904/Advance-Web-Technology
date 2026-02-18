import UserProfile from './UserProfile';

export default function AdminPanel({ user }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Faculty Administration</h1>
      <UserProfile user={user} />
      <p style={{ marginTop: '20px' }}>Quick Actions: Review NOCs, Manage Projects.</p>
    </div>
  );
}