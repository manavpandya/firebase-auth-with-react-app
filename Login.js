import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "./firebaseConfig";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFacebookClick = this.onFacebookClick.bind(this);
    this.onGoogleAuthClick = this.onGoogleAuthClick.bind(this);
    this.onTwitterAuthClick = this.onTwitterAuthClick.bind(this);
  }

  onFieldValueChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit() {
    const { username, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then(user => {
        console.log(user);
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  onFacebookClick() {
    this.props
      .signInWithFacebook()
      .then(socialAuthUser => {
        console.log(socialAuthUser);
        this.props.history.push("/dashboard");
        this.setState({ error: null });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  onGoogleAuthClick() {
    this.props
      .signInWithGoogle()
      .then(socialAuthUser => {
        console.log(socialAuthUser);
        this.props.history.push("/dashboard");
        this.setState({ error: null });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  onTwitterAuthClick() {
    this.props
      .signInWithTwitter()
      .then(socialAuthUser => {
        console.log(socialAuthUser);
        this.props.history.push("/dashboard");
        this.setState({ error: null });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card card-height">
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i
                    onClick={this.onFacebookClick}
                    className="fab fa-facebook-square"
                  />
                </span>
                <span>
                  <i
                    onClick={this.onGoogleAuthClick}
                    className="fab fa-google-plus-square"
                  />
                </span>
                <span>
                  <i
                    onClick={this.onTwitterAuthClick}
                    className="fab fa-twitter-square"
                  />
                </span>
              </div>
              <div className="card-body">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="username"
                    onChange={this.onFieldValueChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    onChange={this.onFieldValueChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn float-right login_btn"
                    onClick={this.onFormSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  twitterProvider: new firebase.auth.TwitterAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
