import React, { useState } from 'react';
import { Content } from '../styled-components/ContentStyle';
import styled from 'styled-components';
import { postWithoutToken } from '../service/DataFetcher';

const Register = () => {
  const [fetchData, setFetchData] = useState('');

  const register = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let postData = { username: username, password: password, email: email };
    postWithoutToken('register', postData, setFetchData);
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
      {fetchData === '' ? null : <div>{fetchData}</div>}
    </Content>
  );
};

export default Register;
