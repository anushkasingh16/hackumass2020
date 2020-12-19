import './App.css';
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './config.js';
// import Radium from "radium";
// import visaIMG from "./images/visa.png";

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// function helper(snapshot) {
//  let key = snapshot.key; // null
//  let  childKey = snapshot.child("users/ada").key; // "ada"
// };
// var ref = firebase.database().ref();
// ref.once("value").then(helper);

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
  let [credit_card_clicked, set_credit_card_clicked] = useState(false);
  const [purchase_body, set_purchase_body] = useState(null);
  const [credit_card_button_css, set_credit_card_button_css] = useState({marginRight: "1.5%"});
  const [paypal_button_css, set_paypal_button_css] = useState({marginLeft: "1.5%"});

  const toggle_purchase_option = () => {
    if (credit_card_clicked){
      set_credit_card_button_css({marginRight: "1.5%", borderWidth: "medium", borderColor: "black"});
      set_paypal_button_css({marginLeft: "1.5%"});
      set_purchase_body(
        <div id = "creditCardSelect">
          <button id = "visa">
            visa
          </button>
          <button id = "masterCard">
              MasterCard
          </button>
          <p>Name on the Credit Card</p>
          <input type = "text"/>
          <div>
            <p>Card Numbers</p>
            <input class = "cardNumbers" type = "text"/>
            <input class = "cardNumbers" type = "text"/> 
            <input class = "cardNumbers" type = "text"/> 
            <input class = "cardNumbers" type = "text"/>
          </div>
          <p>Expiration Date</p>
          <input type = "text"/>
            <p>CVC</p>
            <input type = "text"/>
        </div>
      )

    } else{
      set_credit_card_button_css({marginRight: "1.5%"});
      set_paypal_button_css({marginLeft: "1.5%", borderWidth: "medium", borderColor: "black"});
      set_purchase_body(
        <div>
          <button>PayPal Log in</button>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <div className = "summary" style = {{paddingBottom: "3%"}}>
        <h1 id = "intro">Complete Your Donation</h1>
        <p>Total Donation: [Price]</p>
        <button 
          onClick = {() => {
            credit_card_clicked = true;
            toggle_purchase_option();
          }}
          style = {credit_card_button_css}
        >
            Credit card
        </button>
        <button
          onClick = {() => {
            credit_card_clicked = false;
            toggle_purchase_option();
          }} 
          style = {paypal_button_css}>
            PayPal
        </button>
      </div>
      {purchase_body}

    </div>
  );
}
export default App;
