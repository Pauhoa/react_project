import React, {Component} from "react";
import ReactDOM from "react-dom";
//? import App from './App';
//?import reportWebVitals from './reportWebVitals';

const Composant1 = () => <h1> Composant 1</h1>
const Composant2 = () => <h1> Composant 2</h1>



class App extends Component {
 render() {
   return (
     <div>
       <div className="p-2 w-100 d-flex border flex-row">
         <div className="m-2">Composant 1</div>
         <div className="m-2">Composant 2</div>
       </div>
       <div style= { {minHeight: '100vh'} } className="d-flex text-center flex-column justify-content-center">
        <Composant1 />
        <Composant2 />
       </div>
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
