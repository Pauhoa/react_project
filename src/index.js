import React from 'react';
import ReactDOM from 'react-dom';
//? import './index.css';
//? import App from './App';
//?import reportWebVitals from './reportWebVitals';

const element2 = <div><h1 className='my-title'>Hello World !!</h1></div>



const element  = React.createElement('div', {className: 'container'}, React.createElement('h1', {className: 'my-title'}, "Hello World !"));

ReactDOM.render(
  element2,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
