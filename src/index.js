import React, {Component} from "react";
import ReactDOM from "react-dom";
//? import App from './App';
//?import reportWebVitals from './reportWebVitals';
import Composant1 from './components/composant1/Composant1'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Title</h1>
        <Composant1 />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
