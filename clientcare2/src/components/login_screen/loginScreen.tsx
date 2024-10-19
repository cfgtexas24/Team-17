import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css'; // Import the CSS file

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    if (role === 'user') {
      navigate('/page/user');
    } else if (role === 'admin') {
      navigate('/page/admin');
    }
  };

  return (
    <div className='login-page'>
      <h1>Login Page</h1>
      <div className="button-group">
        <button className='login-btn' onClick={() => handleLogin('user')}>
          Log in User
        </button>
        <button className='login-btn' onClick={() => handleLogin('admin')}>
          Log in Admin
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
