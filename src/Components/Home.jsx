import React from 'react';
import Header from './Header';
import Container from './Container';
import Login from './Login';
import Signup from './Signup';

function Home() {
  return (
    <div>
      <Header />
      <Container />
      <Login />
      <Signup />
    </div>
  );
}

export default Home;
