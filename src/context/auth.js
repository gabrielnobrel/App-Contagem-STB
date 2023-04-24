import React, { useState, createContext, useEffect } from "react";
import firebaseConnection from "../services/firebaseConnection";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase, get } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        // setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  //Inicializar o auth
  const auth = getAuth(firebaseConnection);
  //Inicializar o database
  const database = getDatabase(firebaseConnection);

  async function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await get(ref(database, `users/${uid}`)).then((snapshot) => {
          let data = {
            uid: uid,
            name: snapshot.val().name,
            email: value.user.email,
          };

          setUser(data);
          storageUser(data);
        });
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  async function signUp(name, email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(
      async (value) => {
        let uid = value.user.uid;

        await set(ref(database, `users/${uid}`), {
          name: name,
        })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };

            setUser(data);
            storageUser(data);
          })
          .catch((error) => {
            //Erro padrão do firebase
            alert(error.code);
          });
      }
    );
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  async function signOut() {
    await auth.signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
