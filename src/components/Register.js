import React, { useState } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import styled from 'styled-components';

const Register = () => {
  const [status, setStatus] = useState('');

  const register = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let postData = { username: username, password: password, email: email };
    axios.post('http://localhost:8080/register', postData).then((res) => {
      setStatus(res.data);
    });
  };

  const RegisterForm = styled.form`
    width: 50%;
    margin: auto;
    margin-top: 5vh;
    text-align: center;
    border: 1px solid black;
  `;

  return (
    <Content>
      <RegisterForm onSubmit={register}>
        <label htmlFor='email'>E-mail: </label>
        <input
          type='email'
          name='email'
          id='email'
          required='true'
          autoComplete='off'
          placeholder='e-mail'
        />
        <br />
        <label htmlFor='username'>Username: </label>
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
        <label htmlFor='password'>Password: </label>
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
        <button type='submit'>Submit</button>
      </RegisterForm>
      {status === '' ? null : <div>{status}</div>}
    </Content>
  );
};

export default Register;
