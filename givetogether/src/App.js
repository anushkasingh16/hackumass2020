import './App.css';
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './config.js';
import PurchaseWithCreditCard from "./PurchaseBody/purchaseBody";
import PurchaseWithPaypal from "./PurchaseWithPayPal/PurchaseWithPaypal";
import creditCardIMG from "./images/creditCard.png";
import PayPalIMG from "./images/PayPal.png";
import khanacademy from './images/khanacademy.png'
import rainforest from './images/rainforest.jpeg'
import feedingamerica from './images/feedingamerica.png'
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
function Home(){
  
//   function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   console.log(slides.length);
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  
//   if(slides.length !== 0){
    
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   }
// }
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
// showSlides(slideIndex = n);
// }
     
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
                        <li><a href="/edu">EDUCATION</a></li>
                        <li><a href="/tech">TECH</a></li>
                        <li><a href="/health">HEALTH</a></li>
                        <li><a href="/pol">POLITICS</a></li>
                        <li><a href="/others">OTHERS</a></li>
                    </ul>
                </div>
            </div>
            <div className="trending"> 
 

            <h1 >TRENDING</h1>
            {/* <div className="slideshow-container">
              <div className="mySlides">
                <div className="numbertext">1 / 3</div>
                <img src={khanacademy} ></img>

               </div>
               <div className="mySlides">
                <div className="numbertext">2 / 3</div>
                <img src={rainforest} ></img>
               </div>
               <div className="mySlides">
                <div className="numbertext">3 / 3</div>
                <img src={feedingamerica} ></img>
               </div>
               <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
               <a className="next" onclick={plusSlides(1)}>&#10095;</a>
            </div>

            
            <br></br>
           <div>
           <span className="dot" onclick={currentSlide(1)}></span>
           <span className="dot" onclick={currentSlide(2)}></span>
           <span className="dot" onclick={currentSlide(3)}></span>
           </div> */}
           <div className="slideshow-container">
            <div className="mySlides">
            <img src={khanacademy} ></img>
            <h3>Recommended Donations: $1/$2/$4/$6</h3>

            </div>
            <div className="mySlides">
            <img src={rainforest} ></img>
            <h3>Recommended Donations: $1.92 </h3>
            </div>
            <div className="mySlides">
            <img src={feedingamerica} ></img>
            <h3>Recommended Donations: $1 CA</h3>
            </div>
           </div>
            <button className="donateButton" onClick={event =>  window.location.href='/donate'} >DONATE</button>
          </div>
</div>

    <div className="footer">
             <h2>ABOUT</h2>
<p>MiniMatch site lets you browse and pick out an ideal non-profit or charity and contribute small (usually below $5 USD), pre-calculated amounts, then share with your friends to encourage them to donate. This lets you give back to society without breaking your bank, and leverages your social media networks for social change.
We pool the money marked for each organization, then donate when it reaches a certain amount, allowing for individuals to donate smaller amounts than the organization allows and reducing the percentage of donations lost by a flat fee per donation.</p>
    </div>
    </div>
  );
}

function Donate() {
  var [credit_card_clicked, set_credit_card_clicked] = useState(false);
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
        <h1 id = "intro">Complete Your Donation</h1>
        <p>Total Donation: [Price]</p>
        <input
          className = "paymentMethod"
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
          className = "paymentMethod"
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
