import React, { useState } from 'react';
import { Content } from '../styled-components/ContentStyle';
import { postWithoutToken } from '../service/DataFetcher';
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledFormButton,
} from '../styled-components/FormStyle';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [fetchData, setFetchData] = useState('');
  const history = useHistory();

  const backToMainPage = () => {
    history.push('/');
  };

  const register = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let postData = { username: username, password: password, email: email };
    postWithoutToken('register', postData, setFetchData);
  };

  return (
    <Content>
      <StyledForm onSubmit={register}>
        <StyledLabel htmlFor='email'>E-mail: </StyledLabel>
        <StyledInput
          type='email'
          name='email'
          id='email'
          required='true'
          autoComplete='off'
          placeholder='e-mail'
        />
        <br />
        <StyledLabel htmlFor='username'>Username: </StyledLabel>
        <StyledInput
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
        <StyledLabel htmlFor='password'>Password: </StyledLabel>
        <StyledInput
          type='password'
          name='password'
          id='password'
          required='true'
          minLength='6'
          maxLength='16'
          placeholder='password'
        />
        <br />
        <StyledFormButton type='submit'>Register</StyledFormButton>
        <StyledFormButton type='button' onClick={backToMainPage}>
          Cancel
        </StyledFormButton>
      </StyledForm>
      {fetchData === '' ? null : <div>{fetchData}</div>}
    </Content>
  );
};

export default Register;
