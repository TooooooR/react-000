import React from "react";
import "../styles/Cardestablishments.css";
import Group138 from "../photos/Group138.png"
import money from "../photos/money.png"
import phone1 from "../photos/phone1.png"
import point from "../photos/point.png"


function Cardestablishments() {
    return (
        <div className="wrapper">
            <div className="group138">
                <img src={Group138} alt="Group138" className="Group138"/>
            </div>
            <p className="location">Локація для івентів</p>
            <img src={point} alt="point" className="point"/>
            <p className="adress">м.Львів вул. С. Бандери</p>
            <img src={money} alt="money" className="money"/>
            <p className="moneyy">1920/год</p>
            <img src={phone1} alt="phone1" className="phone1"/>
            <p className="rington">099 222 46 93</p>
        </div>
    );
}
  
  export default Cardestablishments;