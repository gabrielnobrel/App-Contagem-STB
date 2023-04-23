import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_ZwPRx0KQANgB_Q5yozpdEtQJMIzQe34",
  authDomain: "contagem-34079.firebaseapp.com",
  databaseURL: "https://contagem-34079-default-rtdb.firebaseio.com",
  projectId: "contagem-34079",
  storageBucket: "contagem-34079.appspot.com",
  messagingSenderId: "14485063497",
  appId: "1:14485063497:web:8e146a3061e89fbb4e3c98",
};
const firebaseConnection = initializeApp(firebaseConfig);

export default firebaseConnection;
