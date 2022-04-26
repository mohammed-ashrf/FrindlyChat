/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDYp7MF7L7G3rq6YOGI9g1Ax_skTk4P-34",

  authDomain: "frindlychat-13dd4.firebaseapp.com",

  projectId: "frindlychat-13dd4",

  storageBucket: "frindlychat-13dd4.appspot.com",

  messagingSenderId: "828859744860",

  appId: "1:828859744860:web:ab2efa987c243bb4c99c99"
};
const firebaseConfig = {

  apiKey: "AIzaSyDYp7MF7L7G3rq6YOGI9g1Ax_skTk4P-34",

  authDomain: "frindlychat-13dd4.firebaseapp.com",

  projectId: "frindlychat-13dd4",

  storageBucket: "frindlychat-13dd4.appspot.com",

  messagingSenderId: "828859744860",

  appId: "1:828859744860:web:ab2efa987c243bb4c99c99"

};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}