import React from "react";
import {Link} from "react-router-dom";
import "../styles/test.css";
// import Group138 from "../photos/Group138.png";
import money from "../photos/money.png";
import phone1 from "../photos/phone1.png";
import point from "../photos/point.png";
import {dataFor} from "../dates/dataForEstablishmentsInLviv";
import comingSoon2 from "../photos/comingSoon2.jpg"
import { dataFarbaPlace } from "../dates/dataFarbaPlace.js"
import farba1 from "../photos/farba1.png"
import lol2 from "../photos/lol2.png"
import lol1 from "../photos/lol1.png"

function CardEstablishments_2({ results }) {
    return (
        <div>
            {/* {results.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>Тип: {item.type}</p>
                    <p>Номер телефону: {item.work_mobile_number}</p>
                    <p>Адреса: {item.address.city}, {item.address.street}, {item.address.build_number}</p>
                    <p>Цінова категорія: {item.price_category.price_range}</p>
                </div>
            ))} */}

            {results.map((item, index) => (
                    <Link to={`/Offerpage/${item.id}`} key={item.id}>
                        <div className="wrapper" key={index}>
                            <div className="group138">
                                {item.work_mobile_number === '380631885614' && (<img src={farba1} className="Group138" alt='hhh'/>)}
                                {item.address.build_number === '1' && (<img src={lol1} className="Group138" alt='hhh'/>)}
                                {item.address.city === "с.Хоросно" && (<img src={lol2} className="Group138" alt='hhh'/>)}
                                {/* <img src={comingSoon2} alt="Group138" className="Group138"/> */}
                            </div>
                            <p className="location">{item.name}</p>
                            <img src={point} alt="point" className="point"/>
                            <p className="adress">{item.address.city}, {item.address.street}, {item.address.build_number}</p>
                            <img src={money} alt="money" className="money"/>
                            <p className="moneyy">{item.price_category.price_range}</p>
                            <img src={phone1} alt="phone1" className="phone1"/>
                            <p className="rington">{item.work_mobile_number}</p>
                        </div>
                    </Link>
                ))}
            
        </div>
    );
}
  
export default CardEstablishments_2;
