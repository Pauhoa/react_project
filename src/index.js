import React from "react";
import ReactDOM from "react-dom";
//? import './index.css';
//? import App from './App';
//?import reportWebVitals from './reportWebVitals';

class Composant1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0,
    };
  }

  increment = (event) => {
    this.setState({
      compteur: this.state.compteur + 1
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.compteur}</span>
        <br />
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Composant1 name="world !!!" />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
