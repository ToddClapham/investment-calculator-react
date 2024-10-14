import Header from './components/Header'
import UserInput from './components/UserInput'
import InvestmentTable from './components/InvestmentTable'

import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    numberOfYears: 10,
  });
  
  function handleInputChange(inputId, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.numberOfYears > 0;

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChangeInput={handleInputChange} />
    {inputIsValid && <InvestmentTable userInput={userInput} />}
    {!inputIsValid && <p className='center'>Please enter a valid (positive) number of years</p>}
    </>
  )
}

export default App
