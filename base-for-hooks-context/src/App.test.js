import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {findByTestAttr} from '../test/testUtils'



test('the app component', () => {
  const wrapper = shallow(<App />)
  const found =  findByTestAttr(wrapper, "app-comp")
  expect(found.length).toBe(1)
});
