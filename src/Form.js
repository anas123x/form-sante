import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormStyle.css"
const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDropdown, setSelectedDropdown] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected option:', selectedOption);
    console.log('Selected dropdown:', selectedDropdown);
  };

  return (
    <div className='full-screen-div'>
        <div className='form-container'>
    <form onSubmit={handleSubmit} className="container">
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
      <div className="mb-4">
        <h2>Select an option:</h2>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          <label className="form-check-label">Option 1</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          <label className="form-check-label">Option 2</label>
        </div>
      </div>
      <div className="mb-4">
        <h2>Select from dropdown:</h2>
        <select
          className="form-select"
          value={selectedDropdown}
          onChange={handleDropdownChange}
        >
          <option value="">Select...</option>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary text-center">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Form;
