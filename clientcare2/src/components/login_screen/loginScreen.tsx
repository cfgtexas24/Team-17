import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const LoginFunc = () => {
  const navigate = useNavigate(); 


  // THE WAY IT WORKS:
  // this function will reroute you to user or admin depending on what you click, the button at the bottom will give the 2 options to go user or admin

  const handleLogin = (role) => {
    if (role === 'user') {
      navigate('/page/user'); 
    } else if (role === 'admin') {
      navigate('/page/admin'); 
    }
  };

  return (
    <div className='login-page'>
      <h2>Login Page</h2>
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
}

export default LoginFunc;
