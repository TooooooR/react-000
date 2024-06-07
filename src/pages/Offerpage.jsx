import React from "react";
import "../styles/Offerpage.css";
// import { useParams } from "react-router-dom";
// import {dataFor} from "../dates/dataForEstablishmentsInLviv";
// import myDATAS from "../dates/datafor.json";
import calendar from "../photos/calendar.jpg"
import appsbold from "../photos/appsbold.png";
import plus from "../photos/plus.png"
import comingSoon2 from "../photos/comingSoon2.jpg"
import lucide_check from "../photos/lucide_check.png"
import ServicesByColumns from "../component/ServicesByColumns/ServicesByColumns";
import BoxForPriceCapacity from "../component/BoxForPriceCapacity/BoxForPriceCapacity";
import ShowPictures from "../component/ShowPictures/ShowPictures";
import Sliderslox from "../component/Sliderslox";
import { dataFarbaPlace } from "../dates/dataFarbaPlace.js"


function Offerpage() {
    // const { id } = useParams();
    // const restaurant = dataFor.find(item => item.id === parseInt(id));

    const items = [
        'Wi-Fi', 'Паркування', 'Дизайнерські зали'
      ];

    const itemss = [
        'Обслуговування', 'Додаткове обладнання', 'Планування заходів'
      ];

      const img = [comingSoon2, calendar, plus, lucide_check, comingSoon2, comingSoon2, calendar, plus, lucide_check, comingSoon2];

    return (
        <div>
            <div className="wrapper1">
                <div className="name_of_est">
                    FARBA PLACE
                    {/* {restaurant.address}
                    {myDATAS[0].address.build_number} */}
                </div>
                <div className="images_of_est">
                    <Sliderslox
                        data={dataFarbaPlace}
                    />
                </div>
                <div className="information_about_est">
                    <p className="information">Інформація про заклад</p>
                    <div>
                    FARBA PLACE - це лофт простір для проведення різноманітних подій та фотосесій у Львові.
                    До Ваших послуг три дизайнерських зали.
                    Ідеально підходить для організації подій, від дитячого дня народження до корпоративу Вашої компанії.
                    Повна свобода вибору формату!
                    <br></br>
                    <br></br>
                    Також це мега локація для створення фото та відео контенту. Різноманітність залів, крутий декор та професійне обладнання реалізує Вашу ідею в життя.
                    <br></br>
                    <br></br>
                    Фарбуйте життя з нами!
                    </div>
                </div>
                <div className="calendar">
                    <img src={calendar} alt="calendar" className="caalendar"/>
                </div>
                <div className="more_info">
                    <BoxForPriceCapacity
                        name="Ціна за особу"
                        data="1000 - 3000"
                    />
                    <BoxForPriceCapacity
                        name="Кількість осіб"
                        data="250"
                    />
                    <div className="phone_number">
                        Call
                    </div>
                </div>
                <div className="services">
                    {/* <ServicesByColumns 
                        data={items}
                        img={appsbold}
                        name="Типи заходів для кого це підходить"
                    /> */}
                    <ServicesByColumns 
                        data={items}
                        img={plus}
                        name="Послуги які можна докупити"
                    />
                    <ServicesByColumns 
                        data={itemss}
                        img={lucide_check}
                        name="Послуги які входять в ціну"
                    />
                </div>
            </div>
        </div>
        
    );
}
  
export default Offerpage;
