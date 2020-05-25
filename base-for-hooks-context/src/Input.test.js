import React from 'react';

import Input from './Input';
import {findByTestAttr, checkProps} from '../test/testUtils'
import {shallow} from 'enzyme';

export const setup = (secretWord="party") => {
  const wrapper = shallow(<Input secretWord={secretWord} />)
  return wrapper;
}


test('the app component', () => {
  const wrapper = setup()
  // console.log('ff this is a test', wrapper.debug({verbose: true}))
  const found =  findByTestAttr(wrapper, "input-comp")
  expect(found.length).toBe(1)
});

test('the secret word prop', () => {
  expect(checkProps(Input, {secretWord: 'party'}))
});

describe('state controlled input field', () => {

    test('state updates with a value when input box changes', () => {
      // Set up current mock function
      const mockSetCurrentGuess = jest.fn()
      React.useState = jest.fn(() => ["", mockSetCurrentGuess])

      const wrapper = setup()
      const inputBox = findByTestAttr(wrapper, 'input-box')
      const mockEvent = {target: {value: 'train'}}
      inputBox.simulate('change', mockEvent)

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })
})
