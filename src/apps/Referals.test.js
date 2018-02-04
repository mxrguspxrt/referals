import React from 'react';
import ReactDOM from 'react-dom';
import Referals from './Referals';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Referals />, div);
  ReactDOM.unmountComponentAtNode(div);
});
