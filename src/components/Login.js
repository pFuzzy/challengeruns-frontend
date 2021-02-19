import React, { useState } from 'react';
import { Content } from '../styled-components/ContentStyle';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  StyledForm,
  StyledFormButton,
  StyledInput,
  StyledLabel,
  StyledStatusMessage,
} from '../styled-components/FormStyle';
import { postWithoutToken } from '../service/DataFetcher';

const Login = () => {
  const [fetchData, setFetchData] = useState('');
  const [cookies, setCookie] = useCookies(['token', 'username']);

  const login = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let postData = { username: username, password: password };
    postWithoutToken('login', postData, setFetchData);
  };

  if (fetchData.status === 'Login successful!') {
    setCookie('token', fetchData.token);
    setCookie('username', fetchData.username);
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
          {fetchData.status === 'Invalid username or password!' ? (
            <StyledStatusMessage>{fetchData.status}</StyledStatusMessage>
          ) : null}
        </StyledForm>
      </Content>
    );
  }
};

export default Login;
