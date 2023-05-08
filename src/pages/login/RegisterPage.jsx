import React, { useState, useCallback } from 'react';
import './login.css';
// import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const RegisterPage = () => {

  const [token,setToken]=useState({});
  const [isLoading, setLoading] = useState(false);

  const [user,setUser] = useState({
    name: '',
    password:'',
    email:'',
  })

  const onRegisterBtnClick = useCallback(async () => {

    fetch(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en'
    )
    .then((res) => res.json())
    .then((data) => setToken(data.request_token));

    console.log(token)

    fetch(`http://127.0.0.1:3001/api/users?username=${user.name}&password=${user.password}&gsid=${token}`, {
      method:'POST',
    })

    if (!user.name || !user.password || !user.email) {
      console.log(user)
      alert('Please enter your details to register')
      return;
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [user])

  const onEmailChange = useCallback((e) => {
    setUser({
     ...user,
     email: e.target.value,
    })
    console.log(user)
  }, [setUser, user])

  const onNameChange = useCallback((e) => {
    setUser({
     ...user,
     name: e.target.value,
    })
    console.log(user)
  }, [setUser, user])

  const onPasswordChange = useCallback((e) => {
    setUser({
      ...user,
      password: e.target.value,
     })
     console.log(user)
   }, [setUser, user])

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
      </div>
      <form className='login--form'>

      <label htmlFor="email" className='username'>E-mail address</label>
        <input type="email" placeholder="E-mail address" id="email" className='login--input' onInput={onEmailChange} value={user.email}></input>

        <label htmlFor="username" className='username'>Username</label>
        <input type='text' placeholder='Username' id='username' className='login--input' onInput={onNameChange} value={user.name}></input>

        <label htmlFor="password" className='password'>Password</label>
        <input type='password' placeholder='Password' id='password' className='password--input' onInput={onPasswordChange} value={user.password}></input>

        <button className='login--button2' onClick={onRegisterBtnClick} disabled={isLoading}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;