const Rating = ({
  limit,
  selectedRating,
  setSelectedRating,
  setResponses,
  question,
  responses,
}) => {
  return (
    <div className='row mt-5'>
      <div className='col-12'>
        {[...Array(limit)].map((e, i) => {
          return (
            <button
              key={i}
              type='button'
              className='btn btn-light option-btn'
              style={{
                backgroundColor: i + 1 === selectedRating ? '#0d6efd' : 'white',
                color: i + 1 === selectedRating ? 'white' : 'black',
                border: 'none',
              }}
              onClick={() => {
                setSelectedRating(i + 1);
                const newResponses = responses.filter((response) => {
                  return response.question !== question;
                });
                newResponses.push({
                  question: question,
                  response: i + 1,
                });
                setResponses(newResponses);
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
