import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homescreen from './screen/Homescreen';
import ProfileScreen from './screen/ProfileScreen';
import Login from './screen/Login';
import { useEffect } from 'react';
import { auth } from './stores/firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './counters/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if(userAuth){
        // login
        dispatch(login(
          {uid: userAuth.uid,
          email: userAuth.email}
        ))
      }else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user? (
          <Login/>
        ): (
          <Routes>
            <Route exact path="/profile" element={ <ProfileScreen />}></Route>
            <Route exact path="/" element={ <Homescreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
