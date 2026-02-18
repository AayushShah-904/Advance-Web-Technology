import UserProfile from './UserProfile';

export default function StudentDashboard({ user }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Student Portal</h1>
      <UserProfile user={user} />
      {/* You can add your Internship tracking here */}
    </div>
  );
}