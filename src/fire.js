import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG4dBO8-nIL_Xaua9kBKrRnGtSCdTqgXs",
  authDomain: "calendar-52d3c.firebaseapp.com",
  projectId: "calendar-52d3c",
  storageBucket: "calendar-52d3c.appspot.com",
  messagingSenderId: "881760022946",
  appId: "1:881760022946:web:501c0f0ab787cd9c8b42fb",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
