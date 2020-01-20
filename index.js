import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Login from "./Login";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Firebase Authentication in React App"
    };
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Firebase Auth using React App</h1>
            <p className="lead">
              This is the sample example that shows how to use firebase auth in
              React app.
            </p>
          </div>
        </div>
        <Main />
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
