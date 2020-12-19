import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './config.js';
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function helper(snapshot) {
//  let key = snapshot.key; // null
//  let  childKey = snapshot.child("users/ada").key; // "ada"
};
var ref = firebase.database().ref();
ref.once("value").then(helper);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
       <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,500;0,700;1,500&display=swap" rel="stylesheet"></link>
        <div className="header">
            <center>MinMatch</center> 
        </div>
        <div className="mainlayout">
            <div className="categories">
                <div className="list">
                    <ul>
                        <li>Education</li>
                        <li>Tech</li>
                        <li>Health</li>
                        <li>Politics</li>
                    </ul>
                </div>
            </div>
            <div className="trending"> 
              < a href="/donate">trending</a>
            </div>
            
    </div>
    <div className="footer">
             <h2>About</h2>
    </div>
    </div>
  );
}

function Donate() {
  return <h2>Donate</h2>;
}
export default App;
