import './App.css';
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './config.js';
import PurchaseWithCreditCard from "./PurchaseBody/purchaseBody.js";
import PurchaseWithPaypal from "./PurchaseWithPayPal/PurchaseWithPaypal.js";
import creditCardIMG from "./images/creditCard.png";
import PayPalIMG from "./images/PayPal.png";


firebase.initializeApp(firebaseConfig);
let database= firebase.database().ref();

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
  <center>MiniMatch </center> 
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
      set_purchase_body(<PurchaseWithCreditCard/>)

    } else{
      set_credit_card_button_css({marginRight: "1.5%"});
      set_paypal_button_css({marginLeft: "1.5%", borderWidth: "medium", borderColor: "black"});
      set_purchase_body(<PurchaseWithPaypal/>)
    }
  }

  return (
    <div className="App">
      <div className = "summary" style = {{paddingBottom: "3%"}}>
        <h1 id = "intro">Complete Tour Donation</h1>
        <p>Total Donation: [Price]</p>
        <input 
          type = "image"
          src = {creditCardIMG}

          onClick = {() => {
            credit_card_clicked = true;
            toggle_purchase_option();
          }}
          style = {credit_card_button_css}
        >
        </input>
        <input
          type = "image"
          src = {PayPalIMG}
          onClick = {() => {
            credit_card_clicked = false;
            toggle_purchase_option();
          }} 
          style = {paypal_button_css}>
        </input>
      </div>
      {purchase_body}

    </div>
  );
}

export default App;
