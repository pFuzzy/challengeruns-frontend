import React, { useState } from 'react';
import { Content } from '../styled-components/Content';
import styled from 'styled-components';
import axios from 'axios';

const Login = () => {
  const [status, setStatus] = useState('');

  const LoginForm = styled.form`
    width: 50%;
    margin: auto;
    margin-top: 5vh;
    text-align: center;
    border: 1px solid black;
  `;
  const login = (e) => {
    alert('login sent');
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let postData = { username: username, password: password };
    axios.post('http://localhost:8080/login', postData).then((res) => {
      setStatus(res.data);
    });
  };

  return (
    <Content>
      <LoginForm onSubmit={login}>
        <input
          type='text'
          name='username'
          id='username'
          required='true'
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
          required='true'
          minLength='6'
          maxLength='16'
          placeholder='password'
        />
        <br />
        <button type='submit'>Sign in</button>
      </LoginForm>
    </Content>
  );
};

export default Login;
