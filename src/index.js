import React from 'react';
import ReactDOM from 'react-dom';
//? import './index.css';
//? import App from './App';
//?import reportWebVitals from './reportWebVitals';

const Composant2 = (props) => {
  return <h1>{props.name}</h1>
}

class Composant1 extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Composant2 name="c2-1"></Composant2>
        <Composant2 name="c2-2"/>
      </div>
    )
  }
}


ReactDOM.render( <Composant1 name="world !!!" /> , document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
