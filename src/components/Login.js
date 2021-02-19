import React, { useState } from 'react';
import { Content } from '../styled-components/ContentStyle';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  StyledForm,
  StyledFormButton,
  StyledInput,
  StyledLabel,
} from '../styled-components/FormStyle';

const Login = () => {
  const [tokenData, setTokenData] = useState('');
  const [cookies, setCookie] = useCookies(['token', 'username']);

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
        <StyledForm onSubmit={login}>
          <StyledLabel htmlFor='username'>Username: </StyledLabel>
          <StyledInput
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
          <StyledLabel htmlFor='password'>Password: </StyledLabel>
          <StyledInput
            type='password'
            name='password'
            id='password'
            required={true}
            minLength='6'
            maxLength='16'
            placeholder='password'
          />
          <br />
          <StyledFormButton type='submit'>Sign in</StyledFormButton>
          {tokenData.status === 'Invalid username or password!' ? (
            <div>{tokenData.status}</div>
          ) : null}
        </StyledForm>
      </Content>
    );
  }
};

export default Login;
