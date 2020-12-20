import React, { useState } from "react"
import visaIMG from "../images/visa.png"
import masterCardIMG from "../images/mastercard.png"
import DonateButton from "./DonateButton/DonateButton"


const PurchaseBody = (props) => {
    const [selected_card_msg, set_selected_card_msg] = useState("")

    return (
        <div id = "creditCardSelect">
        <input 
          id = "visa" 
          type = "image" 
          src = {visaIMG}
          onClick = {() => {set_selected_card_msg("Visa")}}
          style = {{width: "80px", marginRight: "2%"}}/>
        <input 
          id = "masterCard" 
          type = "image" 
          src = {masterCardIMG}
          onClick = {() => {set_selected_card_msg("MasterCard")}}
          style = {{width: "80px", border: "solid",  borderColor: "gray"}}/>
        <p>Selected: <span style = {{fontWeight: "bold"}}>{selected_card_msg}</span></p>
        <p>Name</p>
        <input type = "text"/>
        <div>
          <p>Card Numbers</p>
          <input className = "cardNumbers" type = "text"/>
          <input className = "cardNumbers" type = "text"/> 
          <input className = "cardNumbers" type = "text"/> 
          <input className = "cardNumbers" type = "text"/>
        </div>
        <p>Expiration Date</p>
        <input type = "text"/>
          <p>CVC</p>
        <input type = "text" style = {{marginBottom: "3%"}}/>
        
        
        <DonateButton/>
      </div>
    )
}

export default PurchaseBody