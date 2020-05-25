import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';
import {findByTestAttr} from '../test/testUtils'



test('the app component', () => {
  const wrapper = shallow(<Input />)
  const found =  findByTestAttr(wrapper, "input-comp")
  expect(found.length).toBe(1)
});
