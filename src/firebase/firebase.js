import firebase from "firebase";

//Get this config from console of firebase website
var config = {
  apiKey: "AIzaSyDBH-yUTpcUIDRmmXlQ9EuBvuVpQ-J6lDo",
  authDomain: "weather-app-ba381.firebaseapp.com",
  databaseURL: "weather-app-ba381-default-rtdb.firebaseio.com",
  projectId: "weather-app-ba381",
  storageBucket: "weather-app-ba381.appspot.com",
  messagingSenderId: "879454481169",
  appId: "1:879454481169:web:ca7664cb9e081f6588bab0"
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

//Authentication
var provider = new firebase.auth.GoogleAuthProvider();

export const logIn = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        resolve({
          token: token,
          user: user
        });
      });
  });
};

//DB

export const fetchFromDB = () => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("notes/")
      .once("value")
      .then(function (snapshot) {
        if (snapshot.val()) {
          var notes = [];
          Object.keys(snapshot.val()).forEach((key) => {
            var note = {};
            note = { ...snapshot.val()[key] };
            note["key"] = key;
            notes.push(note);
          });
          resolve(notes);
        } else {
          resolve([]);
        }
      });
  });
};

export const addToDB = (note) => {
  const NoteRef = firebase.database().ref("notes/").push({
    title: note.title,
    timestamp: note.timestamp,
    content: note.content
  });
  return NoteRef.key;
};

export const removeFromDB = (noteKey) => {
  firebase
    .database()
    .ref("notes/" + noteKey)
    .remove();
};

export default firebase;
