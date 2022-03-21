import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Composant1 = (props) => {
  return <h1> Composant 1</h1>;
}
const Composant2 = () => <h1> Composant 2</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="p-2 w-100 d-flex border flex-row">
            <Link to="/1" className="m-2">
              Composant 1
            </Link>
            <Link to="/2" className="m-2">
              Composant 2
            </Link>
          </div>
          <div
            style={{ minHeight: "100vh" }}
            className="d-flex text-center flex-column justify-content-center"
          >
            <Routes>
              <Route path="/" element={<Composant1/>}></Route>
              <Route path="/2" element={<Composant2/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
