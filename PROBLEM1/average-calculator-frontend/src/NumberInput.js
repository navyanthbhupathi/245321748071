import React, { useState } from 'react';

const NumberInput = ({ fetchNumbers }) => {
  const [numberType, setNumberType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (['p', 'f', 'e', 'r'].includes(numberType)) {
      fetchNumbers(numberType);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={numberType}
        onChange={(e) => setNumberType(e.target.value)}
        placeholder="Enter type: p, f, e, r"
      />
      <button type="submit">Fetch Numbers</button>
    </form>
  );
};

export default NumberInput;
