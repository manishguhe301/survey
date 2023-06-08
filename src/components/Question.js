import Rating from './Rating';
const Question = ({
  question,
  selectedRating,
  setSelectedRating,
  setResponses,
  responses,
}) => {
  return (
    <>
      <div className='row mt-5'>
        <div className='col-12'>
          <h5>{question.question}</h5>
        </div>
      </div>
      {question.type === 'rating' ? (
        <Rating
          limit={question.limit}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          setResponses={setResponses}
          question={question.question}
          responses={responses}
        />
      ) : (
        <div className='row mt-5'>
          <div className='col-12'>
            <textarea
              className='form-control'
              rows='5'
              placeholder='Enter your response here'
              onChange={(e) => {
                const newResponses = responses.filter((response) => {
                  return response.question !== question.question;
                });
                newResponses.push({
                  question: question.question,
                  response: e.target.value,
                });
                setResponses(newResponses);
              }}
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
