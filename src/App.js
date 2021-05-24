import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'

function App() {

  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {                             // this will check for any authentication state change in the application through use effect  // on subscribe will clean up the effect 
      if (userAuth){
        //logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email : userAuth.email
        }))                                                                 // dispatching a login event in order to carry it forard when browsing for a particular user
      } else {
        //logged out
        dispatch(logout())                                                                  // it will reset the user back to null
      }
    })

    return unsubscribe;                                                                    // when the effect and state cleans up run the unsunscribe function
  },[dispatch])

  return (
    <div className="app">
       <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        {!user ? (
          <Login />
        ) : (
          
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
    </Router>

    </div>
  );
}

export default App;
