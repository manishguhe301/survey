import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightblue;
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 12px;
  border-radius: 10px;
`;

function Welcome() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className='display-4'>Welcome to our store!</h1>
      <p className='lead'>Please fill out our survey to help us improve our store.</p>
      <br />
      <Button
        type='button'
        className='btn btn-primary btn-lg'
        onClick={() => {
          navigate('/survey');
        }}
      >
        Start Survey
      </Button>
    </Container>
  );
}

export default Welcome;
