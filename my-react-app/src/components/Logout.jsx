import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Clear the React State
    setUser(null);

    // 2. Clear any persistent storage (if you used localStorage)
    localStorage.removeItem('user');
    sessionStorage.clear();

    // 3. Redirect to the login page immediately
    navigate('/');
  }, [setUser, navigate]);

  return null; // This component doesn't need to render anything
};

export default Logout;