import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUUZ-VgOCQ0yu-m3lsg2br26XGxLHe3y8",
  authDomain: "hotel-booking-a5bd9.firebaseapp.com",
  databaseURL: "https://hotel-booking-a5bd9-default-rtdb.firebaseio.com",
  projectId: "hotel-booking-a5bd9",
  storageBucket: "hotel-booking-a5bd9.appspot.com",
  messagingSenderId: "690854580929",
  appId: "1:690854580929:web:35d69d001654c926cffa40",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
