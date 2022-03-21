import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Form extends Component {
  value = {}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.value); 
  }

  handleChange = (e) => {
    this.value[e.target.name] = e.target.value;
  }

  render() {
    return <>{this.props.render({ handleSubmit: this.handleSubmit, handleChange: this.handleChange })}</>;
  }
}

class App extends Component {
  submit = (value) => {
    console.log(value);
  };

  render() {
    return (
      <Form
        submit={this.submit}
        render={({ handleSubmit, handleChange}) => (
          <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} type="text" />
            <input name='email' onChange={handleChange} type="text" />
            <button>submit</button>
          </form>
        )}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
