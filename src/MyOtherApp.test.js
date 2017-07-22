import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import MyOtherApp from './MyOtherApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyOtherApp />, div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<MyOtherApp />);
  const welcome = <h2>Welcome to Another React</h2>;
  expect(wrapper).toContainReact(welcome);
});
