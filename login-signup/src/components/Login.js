import React from 'react';

function Login() {
  return (
    <div className='login-div'>
      <label>
        <span>Email</span>
        <input className="login-div-label" type='email' placeholder='Email' />
      </label>
      <label>
      <span>Password</span>
        <input className="login-div-label" type='password' placeholder='Password' />
      </label>
      <button className='sub-btn'><span>Login</span></button>
    </div>
  );
}

export default Login;
