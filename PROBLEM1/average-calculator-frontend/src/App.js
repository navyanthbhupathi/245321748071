import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberInput from './NumberInput';
import NumberList from './NumberList';
import AverageDisplay from './AverageDisplay';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [average, setAverage] = useState(null);
  const [error, setError] = useState('');

  const fetchNumbers = async (numberType) => {
    try {
      const response = await axios.get(`http://localhost:5000/numbers/${numberType}`);
      const { windowPrevState, windowCurrState, numbers, avg } = response.data;
      setWindowPrevState(windowPrevState);
      setWindowCurrState(windowCurrState);
      setNumbers(numbers);
      setAverage(avg);
    } catch (error) {
      setError('Error fetching numbers');
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <NumberInput fetchNumbers={fetchNumbers} />
      {error && <p>{error}</p>}
      <NumberList title="Previous State" numbers={windowPrevState} />
      <NumberList title="Current State" numbers={windowCurrState} />
      <NumberList title="Fetched Numbers" numbers={numbers} />
      <AverageDisplay average={average} />
    </div>
  );
};

export default App;
