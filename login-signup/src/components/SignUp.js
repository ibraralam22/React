import React from 'react';

function SignUp() {
  return (
    <div className='reg-div'>
      <label >
      <span>Full Name</span>
        <input className="reg-div-label" type='text' placeholder='Full Name' />
      </label>
      <label>
      <span>Email</span>
        <input className="reg-div-label" type='email' placeholder='Email' />
      </label>
      <label>
      <span>Password</span>
        <input className="reg-div-label" type='password' placeholder='Password' />
      </label>
      <button className='sub-btn'><span>SignUp</span></button>
    </div>
  );
}

export default SignUp;
