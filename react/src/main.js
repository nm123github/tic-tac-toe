// console.log('Hello World!');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount')
  );
});

