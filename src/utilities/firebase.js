import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import React, {useState, useEffect} from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyB7-2MSZUgYyvaOEKqMwC-mqT4XNgCqKZc",
    authDomain: "reacttutorial-ad768.firebaseapp.com",
    databaseURL: "https://reacttutorial-ad768-default-rtdb.firebaseio.com",
    projectId: "reacttutorial-ad768",
    storageBucket: "reacttutorial-ad768.appspot.com",
    messagingSenderId: "159165688005",
    appId: "1:159165688005:web:faacb1bff313f124eaa8ac"
  };


const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
  };