import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(
  <div className="container">
    <div className="row">
      <div className="col col-xs-4">
        <ValidatedInput />
      </div>
    </div>
  </div>
);
