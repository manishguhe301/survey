import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightblue;
`;

const countdownAnimation = keyframes`
  0% {
    color: black;
  }
  50% {
    color: red;
  }
  100% {
    color: black;
  }
`;

const Countdown = styled.p`
  font-size: 24px;
  font-weight: bold;
  animation: ${countdownAnimation} 1s linear infinite;
`;

function Thankyou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Container>
      <h1 className='display-4'>Thank you for your time!</h1>
      <p className='lead'>Your responses have been recorded.</p>
      <p className='lead'>Please visit our store again!</p>
      <Countdown>
        You will be directed to the homepage in {seconds} seconds.
      </Countdown>
    </Container>
  );
}

export default Thankyou;
