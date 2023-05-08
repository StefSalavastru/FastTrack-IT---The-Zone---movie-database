import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


const LoginPage = () => {

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [user,setUser] = useState({
    name: '',
    password:'',
  })

  const onLoginBtnClick = useCallback(async () => {
    setLoading(true)
    console.log(user)
    setTimeout(() => {
      Promise.resolve({
        authenticated: true,
        token: '123123',
      })
      setLoading(false)
      navigate('/', {
        authenticated:true,
        token:'123456',
      })
    }, 2000)
    //todo
    //pagina de dashboard
    //server - login
    // server - token 
  }, [user])

  const onUserNameChange = useCallback((e) => {
    setUser({
     ...user,
     name: e.target.value,
    })
  }, [setUser, user])

  const onPasswordChange = useCallback((e) => {
    setUser({
      ...user,
      password: e.target.value,
     })
   }, [setUser, user])

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
      </div>
      <form className='login--form'>

        <label htmlFor="username" className='username'>Username</label>
        <input type="text" placeholder="Username" id="username" className='login--input' onChange={onUserNameChange} value={user.name}></input>

        <label htmlFor="password" className='password'>Password</label>
        <input type="password" placeholder="Password" id="password" className='password--input' onChange={onPasswordChange} value={user.password}></input>

        <button className='login--button2' onClick={onLoginBtnClick} disabled={isLoading}>Log In</button>
        {
          isLoading ? <div>Logging in...</div> : null
        }
      </form>
    </div>
  );
};

export default LoginPage;