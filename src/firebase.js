import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC7k2eJiIA_E57dqZkjPsOb5KeRH7Mv0B4',
  authDomain: 'vue-todo-1b777.firebaseapp.com',
  databaseURL: 'https://vue-todo-1b777.firebaseio.com',
  projectId: 'vue-todo-1b777',
  storageBucket: 'vue-todo-1b777.appspot.com',
  messagingSenderId: '177893335930'
}
firebase.initializeApp(config)

const db = firebase.firestore()

export default db
