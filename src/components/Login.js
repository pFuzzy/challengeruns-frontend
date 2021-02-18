import React, { useState } from 'react';
import { Content } from '../styled-components/Content';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [tokenData, setTokenData] = useState('');
  const [cookies, setCookie] = useCookies([]);

  const LoginForm = styled.form`
    width: 50%;
    margin: auto;
    margin-top: 5vh;
    text-align: center;
    border: 1px solid black;
  `;
  const login = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let postData = { username: username, password: password };
    axios.post('http://localhost:8080/login', postData).then((res) => {
      setTokenData(res.data);
    });
  };

  if (tokenData.status === 'Login successful!') {
    setCookie('token', tokenData.token);
    setCookie('username', tokenData.username);
    return <Redirect to='/' />;
  } else {
    return (
      <Content>
        <LoginForm onSubmit={login}>
          <input
            type='text'
            name='username'
            id='username'
            required={true}
            minLength='6'
            maxLength='16'
            autoComplete='off'
            placeholder='username'
          />
          <br />
          <input
            type='password'
            name='password'
            id='password'
            required={true}
            minLength='6'
            maxLength='16'
            placeholder='password'
          />
          <br />
          <button type='submit'>Sign in</button>
          {tokenData.status === 'Invalid username or password!' ? (
            <div>{tokenData.status}</div>
          ) : null}
        </LoginForm>
      </Content>
    );
  }
};

export default Login;
