import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const config = require('../../firebase.json');

export default firebase.initializeApp(config);
