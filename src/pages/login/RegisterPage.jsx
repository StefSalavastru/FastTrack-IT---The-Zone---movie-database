import React, { useState, useEffect } from 'react';
import './login.css';

const RegisterPage = () => {

  console.log('Here')

  const [token, setToken] = useState('as')
        
  useEffect(() => {
    getToken;
  },[]);

  console.log('Here2')

  const getToken = () => {

    console.log('I am here')
    fetch(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en'
    )
      .then((res) => res.json())
      .then((data) => setToken(data.request_token));
  };

  console.log(token);

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
      </div>
      <form className='login--form'>

      <label htmlFor="name" className='username'>Name</label>
        <input type="name" placeholder="Name" id="name" className='login--input'></input>

      <label htmlFor="email" className='username'>E-mail address</label>
        <input type="email" placeholder="E-mail address" id="email" className='login--input'></input>

        <label htmlFor="username" className='username'>Username</label>
        <input type="text" placeholder="Username" id="username" className='login--input'></input>

        <label htmlFor="password" className='password'>Password</label>
        <input type="password" placeholder="Password" id="password" className='password--input'></input>

        <button className='login--button2' onClick={getToken}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;