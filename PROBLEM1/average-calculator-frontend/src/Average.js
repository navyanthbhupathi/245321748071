import React from 'react';

const AverageDisplay = ({ average }) => {
  return (
    <div>
      <h2>Average</h2>
      {average !== null ? <p>{average}</p> : <p>Calculating...</p>}
    </div>
  );
};

export default AverageDisplay;
