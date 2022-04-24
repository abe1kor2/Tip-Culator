import React, { useState} from "react";
import "./Card.css";



// Need to implement backend
function Card(props) {
  // const [result, setResult] = useState('');
  const handleClick = () =>{
    console.log("clicked");
  }

  const handleReset = () =>{
    console.log("RESET")
  }
  

  return (
    <div className="calculator">
      <div className="inputSection">
        <label>Bill</label>
        <input type='number' className="bill-input" id="bill-inp" placeholder="0"></input>
        <label>Select Tip %</label>
        <div className="tip">
            <button onClick={handleClick} className="tip-option"><span>5%</span></button>
            <button onClick={handleClick} className="tip-option"><span>10%</span></button>
            <button onClick={handleClick} className="tip-option"><span>15%</span></button>
            <button onClick={handleClick} className="tip-option"><span>25%</span></button>
            <button onClick={handleClick} className="tip-option"><span>50%</span></button>
            <div id="tip-custom">
                <input type="number" className="tip-custom" placeholder="Custom"></input>
            </div>
        </div>
        <div className="peopleSection">
            <label>Number of People</label>
            <label className="error">Can't be zero</label>
        </div>
        <input type="number" className="people-input" placeholder="0"></input>


        
      </div>
      <div className="outputSection">
          <div className="tip-amount">
              <div className="text">
                <p>Tip Amount</p>
                <p className="divided-person">/ person</p>
              </div>
              <div className="amount" id="tip-sum">$4.27</div>
          </div>
          <div className="total-amount">
              <div className="text">
                <p>Total</p>
                <p className="divided-person">/ person</p>
              </div>
              <div className="amount" id="total-sum">$32.79</div>
          </div>
          <button onClick={handleReset} className="resetSection">RESET</button>
      </div>
    </div>
  );
}


export default Card;
