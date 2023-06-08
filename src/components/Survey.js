import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Question from './Question';

const StyledDiv = styled.div`
  padding-top: 10vh;
  height: 100vh;
  background-color: lightblue;
`;

const questions = [
  {
    question: 'How satisfied are you with our products?',
    type: 'rating',
    limit: 5,
  },
  {
    question: 'How fair are the prices compared to similar retailers?',
    type: 'rating',
    limit: 5,
  },
  {
    question:
      'How satisfied are you with the value for money of your purchase?',
    type: 'rating',
    limit: 5,
  },
  {
    question:
      'On a scale of 1-10 how would you recommend us to your friends and family?',
    type: 'rating',
    limit: 10,
  },
  {
    question: 'What could we do to improve our service?',
    type: 'text',
  },
];

const Survey = () => {
  const [index, setIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [show, setShow] = useState(false);
  let submissionCounter = 0;
  const navigate = useNavigate();
  const submission_id = `submission_${submissionCounter++}`;

  const handleClose = () => setShow(false);

  const handleConfirm = () => {
    localStorage.setItem(submission_id, JSON.stringify(responses));
    setShow(false);
    setResponses([]);
    setIndex(0);
    navigate('/thank-you');
  };

  const handleClick = (direction) => {
    if (direction === 'previous') {
      setIndex((prevIndex) => prevIndex - 1);
      const currentResponse = responses.find(
        (response) => response.question === questions[index - 1].question
      );
      if (currentResponse) {
        setSelectedRating(currentResponse.response);
      }
    } else if (direction === 'next') {
      setIndex((prevIndex) => prevIndex + 1);
      const currentResponse = responses.find(
        (response) => response.question === questions[index + 1].question
      );
      if (currentResponse) {
        setSelectedRating(currentResponse.response);
      } else {
        setSelectedRating(null);
      }
    }
  };

  return (
    <StyledDiv>
      <h3 className='display-5'>Customer Survey</h3>
      <div className='container mt-4'>
        <div className='row'>
          <h4
            className='display-6'
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {index + 1}/{questions.length}
          </h4>
        </div>
        <Question
          question={questions[index]}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          setResponses={setResponses}
          responses={responses}
        />
        {index > 0 ? (
          <button
            type='button'
            className='btn btn-primary mt-5'
            style={{ marginRight: '10px' }}
            onClick={() => handleClick('previous')}
          >
            Previous
          </button>
        ) : null}
        {index === questions.length - 1 ? (
          <button
            type='button'
            className='btn btn-danger mt-5'
            onClick={() => {
              setShow(true);
            }}
          >
            Submit
          </button>
        ) : (
          <button
            type='button'
            className='btn btn-light mt-5'
            style={{
              border: 'none',
              marginLeft: '10px',
              backgroundColor: '#de07f4',
              color: '#fff',
            }}
            onClick={() => {
              setSelectedRating(null);
              handleClick('next');
            }}
          >
            Next
          </button>
        )}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to submit the survey? Please click on the
          Confirm button to submit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='danger' onClick={() => handleConfirm()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </StyledDiv>
  );
};

export default Survey;
