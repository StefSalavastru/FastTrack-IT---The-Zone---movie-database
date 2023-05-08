import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


const LoginPage = () => {

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const[credentials,setCredentials] =useState({});

  const [user,setUser] = useState({
    name: '',
    password:'',
  })

  const onLoginBtnClick = useCallback(async () => {

    fetch(`http://127.0.0.1:3001/api/users?username=${user.name}&password=${user.password}`)
    .then((res) => res.json())
    .then((data)=> setCredentials(data))

   console.log({credentials})

    if (!user.name || !user.password) {
      alert('Please enter your username and your password')
      return;
    }

    setLoading(true)
    console.log(user)
    setTimeout(() => {
      setLoading(false)
      // navigate('/', {
      //   state: {
      //     authenticated:true,
      //     user: {
      //     name:user.name
      //     }
      //   }
      // })
    }, 2000)
  }, [user, navigate])

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