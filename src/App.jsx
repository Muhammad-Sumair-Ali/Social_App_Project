import './App.css';
import { db,
  auth,
  doc,
  getDoc,
  onAuthStateChanged} from "./config/Firebase";
import Router from './config/Router';
import User from "./context/UserContext";
import { useState, useEffect } from 'react';


export default function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
      
        } else {
        
          console.log("No such document!");
        }
      }
    });
  }, []);
  return (
    <User.Provider value={{ user , setUser}}>
      <Router />
    </User.Provider>
  );
};
