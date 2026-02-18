// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import AdminPanel from './components/AdminPanel';
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* If not logged in, show Login page. If logged in, redirect based on role */}
        <Route path="/" element={
          !user ? <Login onLoginSuccess={(u) => setUser(u)} /> : (
            user.role === 'faculty' ? <Navigate to="/admin" /> : <Navigate to="/student" />
          )
        } />

        {/* Protected Routes */}
        <Route path="/student" element={user ? <StudentDashboard user={user} /> : <Navigate to="/" />} />
        <Route path="/admin" element={user ? <AdminPanel user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;