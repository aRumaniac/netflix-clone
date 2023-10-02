import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homescreen from './screen/Homescreen';
import Login from './screen/Login';
import { useEffect } from 'react';
import { auth } from './stores/firebase';
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const user = null;
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if(userAuth){
        console.log(userAuth)
      }else {
        // looged out
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
            <Route exact path="/" element={ <Homescreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
