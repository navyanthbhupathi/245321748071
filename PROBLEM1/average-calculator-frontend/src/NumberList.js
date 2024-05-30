import React from 'react';

const NumberList = ({ title, numbers }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
