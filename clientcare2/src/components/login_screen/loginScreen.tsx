import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const LoginScreen = () => {
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
    <div className='login-page mt-48'>
      <h2 className='text-3xl font-bold mb-5 text-[#3d251e]'>Welcome</h2>
      <div className="button-group space-x-8 space-y-4">
        <button className='login-btn bg-[#3a696e] text-white font-semibold hover:bg-white hover:text-[#3a696e]' onClick={() => handleLogin('user')}>
          Log in User
        </button>
        <button className='login-btn bg-[#3a696e] text-white font-semibold hover:bg-white hover:text-[#3a696e]' onClick={() => handleLogin('admin')}>
          Log in Admin
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
