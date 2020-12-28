import React from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';

const Register = () => {
  const register = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let postData = { username: username, password: password, email: email };

    console.log(postData);
    axios.post('http://localhost:8080/register', postData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Content>
      <form onSubmit={register}>
        <input type='text' id='username' placeholder='username' />
        <br />
        <input type='password' id='password' placeholder='password' />
        <br />
        <input type='email' id='email' placeholder='email' />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </Content>
  );
};

export default Register;
