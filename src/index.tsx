/* Add JavaScript code here! */
import * as React from 'react';
import { render } from "react-dom";
import DataForm from './components/DataForm';
import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBcnVJ7ekkmzrc0IuXJkW1D2rdPEqdUw",
  authDomain: "middarahelper.firebaseapp.com",
  databaseURL: "https://middarahelper-default-rtdb.firebaseio.com",
  projectId: "middarahelper",
  storageBucket: "middarahelper.appspot.com",
  messagingSenderId: "40749793223",
  appId: "1:40749793223:web:404e5420a2a5c074afa3e2",
  measurementId: "G-D20836ESMK"
};
console.log(firebase.apps);
if( firebase.apps.length === 0 ){
  firebase.initializeApp(firebaseConfig);
  //firebase.performance();
  console.log(firebase.apps);
}

const App: React.FC = () => {
  return (
    <>
      HELLO MAIN
      <DataForm />
    </>
  )
}

render(<App />, document.getElementById("root"));