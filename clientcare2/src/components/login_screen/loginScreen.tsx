import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css'; // Import the CSS file

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    if (role === 'user') {
      navigate('/user');
    } else if (role === 'admin') {
      navigate('/admin');
    }
  };

  return (
    <div className='login-page'>
      <h1>Abide Women's Health Center Log In</h1>
      <div className="button-group">
        <button className='login-btn' onClick={() => handleLogin('user')}>
          User Log in 
        </button>
        <button className='login-btn' onClick={() => handleLogin('admin')}>
          Admin Log in
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
