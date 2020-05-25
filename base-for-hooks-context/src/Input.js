import React from 'react';
import PropTypes from "prop-types";

function Input({secretWord}) {

  const [currentGuess, setCurrentGuess] = React.useState('')

  return (
    <div data-test="input-comp">
    <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        placeholder="enter guess"
        value={currentGuess}
        onChange={(e)=> setCurrentGuess(e.target.value)}
      />
      <button type="submit" data-test="submit-button">
        submit
      </button>
    </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
