import React from 'react';
import './purchasePage.css'
import Radium from "radium";
import styled from "styled-components"


const purchasePopup = (props) =>{
    

    return (
        <body>
            <div class = "summary" style="padding-bottom: 5%;">
                <h1 id = "intro">Complete Tour Donation</h1>
                <p>Total Donation: [Price]</p>
                <button>Credit card</button> &nbsp;&nbsp; <button>PayPal</button>
            </div>
            <div>

            </div>
            

        </body>
    )
}

export default purchasePopup