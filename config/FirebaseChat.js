import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

init = () =>{
var firebaseConfig = {
    apiKey: "AIzaSyAhwdTUyD4deNfiewCNEv9J3iB7t08y6Lc",
    authDomain: "get-the-job-creator.firebaseapp.com",
    databaseURL: "https://get-the-job-creator.firebaseio.com",
    projectId: "get-the-job-creator",
    storageBucket: "get-the-job-creator.appspot.com",
    messagingSenderId: "1026006885021",
    appId: "1:1026006885021:web:32d7e81df67bd69d96ea74",
    measurementId: "G-084TSCF8DT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};

observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(10)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;