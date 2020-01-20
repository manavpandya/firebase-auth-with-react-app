import * as firebase from "firebase/app";

const config = {
  apiKey: "your_key",
  authDomain: "your_domain",
  databaseURL: "your_db_url",
  projectId: "your_project_id",
  storageBucket: "bucket_id",
  messagingSenderId: "sender_id",
  appId: "app_id",
  measurementId: "measurement_id"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
