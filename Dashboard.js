import React, { Component } from "react";
import { render } from "react-dom";
import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { withRouter } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount() {
    firebaseConfig.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
        // User is signed out.
      }
    });
  }

  logOutUser() {
    firebaseConfig
      .auth()
      .signOut()
      .then(function() {
        console.log("Signout Done");
      })
      .catch(function(error) {});
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="dashboard-details">
        <div className="card text-center mycard dashboard-info-card">
          <div className="card-header">User Details</div>
          <div className="card-body">
            <h5 className="card-title" />
            <p className="card-text">You are succesfully logged in</p>
            <button onClick={this.logOutUser} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
