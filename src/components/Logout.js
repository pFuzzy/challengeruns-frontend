import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const [cookies, removeCookie] = useCookies([]);
  removeCookie('token');
  removeCookie('username');

  return <Redirect to='/' />;
};
export default Logout;
