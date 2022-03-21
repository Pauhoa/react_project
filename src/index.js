import React, { Component } from "react";
import ReactDOM from "react-dom";

const AuthContext = React.createContext({ isLoggedin:false})

class Header extends React.Component {
  static contextType = AuthContext;

  render() {
    console.log(this.context);

    return (
      <div className="navbar bg-light">
        <div>Mon Logo</div>
        { this.context.auth.isLoggedin ? (
          <div onClick={ this.context.logout }>Deconnexion</div>
        ) : (
          <div onClick={ this.context.login }>Connexion</div>
        )}
      </div>
    );
  }
}

class Layout extends Component {
  render() {
    return <Header />;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        isLoggedin: true
      },
      login: this.login,
      logout: this.logout
    }
  }

  login = () => {
    this.setState({
      auth: {
        isLoggedin: true
      }
    })
  }

  logout = () => {
    this.setState({
      auth: {
        isLoggedin: false
      }
    })
  }

  render() {
    return (
      <div className="container-fluide d-flex flex-column">
        <AuthContext.Provider value={ this.state}>
          <Layout/>
        </AuthContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
