import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

const menuItems = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild'
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<AppDrawer menuHeading="Choose a Game" menuItems={menuItems} />);
