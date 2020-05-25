import React from 'react';

import App from './App';
import {findByTestAttr} from '../test/testUtils'
import {shallow} from 'enzyme';

export const setup = (props={}) => {
  const wrapper = shallow(<App {...props} />)
  return wrapper;
}




test('the app component', () => {
  const wrapper = setup()
  console.log('test', wrapper.debug())
  const found =  findByTestAttr(wrapper, "app-comp")
  expect(found.length).toBe(1)
});
