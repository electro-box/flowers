import React from 'react';
import ReactDOM from 'react-dom';
import Flowers from './Flowers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flowers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
