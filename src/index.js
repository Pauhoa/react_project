import React, { Component } from "react";
import ReactDOM from "react-dom";

const AuthContext = React.createContext({ isLoggedin: false });
const ThemeContext = React.createContext("light");

const Header = () => {
  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <ThemeContext.Consumer>
          {(themeContext) => (
            <div className="navbar bg-light">
              <div>Mon Logo  { themeContext }</div>
              {authContext.auth.isLoggedin ? (
                <div onClick={authContext.logout}>Deconnexion</div>
              ) : (
                <div onClick={authContext.login}>Connexion</div>
              )}
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

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
        isLoggedin: true,
      },
      login: this.login,
      logout: this.logout,
    };
  }

  login = () => {
    this.setState({
      auth: {
        isLoggedin: true,
      },
    });
  };

  logout = () => {
    this.setState({
      auth: {
        isLoggedin: false,
      },
    });
  };

  render() {
    return (
      <div className="container-fluide d-flex flex-column">
        <AuthContext.Provider value={this.state}>
          <Layout />
        </AuthContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
