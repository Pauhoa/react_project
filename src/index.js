import React, {Component} from "react";
import ReactDOM from "react-dom";
//? import App from './App';
//?import reportWebVitals from './reportWebVitals';

const Person = (props) => {
  return (
    <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
      <span>{ ` ${props.person.name} ${props.person.age}`}</span>
      <button className="btn btn-small btn-danger" onClick={props.deletePerson}>Delete</button>
    </li>
  )
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          name: 'Pierre',
          age: 12
        },
        {
          id: 2,
          name: 'Paul',
          age: 13
        },
        {
          id: 3,
          name: 'Jacques',
          age: 14
        }
      ]
    }
  }

  deletePerson = (index) => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({
      people
    })
  }

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">People</h1>
        <ul className="list-group w-100">
          { this.state.people.map ( (p,index) => <Person key={ p.id} person={p} deletePerson={ (index) => this.deletePerson(index)} />)}
        </ul>
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
