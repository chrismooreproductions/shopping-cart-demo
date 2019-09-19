import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../App';

const div = document.createElement('div');

beforeEach(() => {
  
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});

it('renders <App /> without crashing', () => {
  ReactDOM.render(<App />, div);
});

it('initially returns one full products view', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Products').exists());
  expect(wrapper.find('Products')).toHaveLength(1);
});
