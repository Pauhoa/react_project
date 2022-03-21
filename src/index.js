import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Composant1 extends Component {
  render() {
    return (
      <div className="card w-50">
        <div className="card-header">User</div>
        <div className="card-body">
          <div className="card-title">{this.props.user.name}</div>
          <div className="card-text">{this.props.user.city}</div>
        </div>
      </div>
    );
  }
}

const WithLoader = (WrappedComposant, dataName) => {
  return class extends Component {
    render() {
      return (
        <>
          {this.props[dataName] ? (
            <WrappedComposant {...this.props} />
          ) : (
            <h1>Chargement en cours ...</h1>
          )}
        </>
      );
    }
  };
};

const Composant1WithLoader = WithLoader(Composant1, "user");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    setTimeout(() => {
      this.setState({
        user: { name: "Nom", city: "Ville" },
      });
    }, 2000);
  }

  render() {
    return (
      <div className="container-fluide d-flex flex-column justify-content-center align-items-center p-5">
        <Composant1WithLoader user={this.state.user} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
