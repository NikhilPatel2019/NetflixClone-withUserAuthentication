import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/loginScreen';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/profileScreen';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
           if(userAuth){
                //LoggedIN
                dispatch(login({
                  uid: userAuth.uid,
                  email: userAuth.email
                }));
            }else{
               //LoggedOUT
               dispatch(logout());
            }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
                <HomeScreen />
            </Route>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
             
        </Switch>  
        )}        
      </Router>
    </div>
  );
}

export default App;
