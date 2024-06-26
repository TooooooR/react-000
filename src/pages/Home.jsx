import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Static.css";
import Group137 from "../photos/Group137.png";
import Dropdawn from "../component/Dropdown";
import Dropdawn1 from "../component/Dropdown1";
import Dropdawn2 from "../component/Dropdown2";
import Sliders from "../component/Sliders";
import AppLoyautHome from "../map/AppLoyautHome.js";
import { dataRestLviv, dataRestOther } from "../dates/dataforslider.js";

function Home() {
    const [selected, setSelected] = useState("");
    const [selected_1, setSelected_1] = useState("");
    const [selected_2, setSelected_2] = useState("");
    return (
        <>
            <div className="whereareyou">
                Where are you?
            </div>
            
            <div className="select-dropdowns">
                <Dropdawn selected={selected} setSelected={setSelected}/>
                <Dropdawn1 selected={selected_1} setSelected={setSelected_1}/>
                <Dropdawn2 selected={selected_2} setSelected={setSelected_2}/>
                <button className="mainsearch">
                    <Link to="/lviv" className="mainsearch-lviv">Search</Link>
                </button>
            </div>

            <img src={Group137} alt="Group137" className="Group137"/>
            <div className="Lvivmap">
                <AppLoyautHome/>
            </div>
            

            <Sliders 
                city='Lviv'
                data={dataRestLviv}
            />
            <Sliders 
                city='Other cities'
                data={dataRestOther}
            />
            <Sliders 
                city='Other cities'
                data={dataRestOther}
            />
        </>
    );
  }

export default Home;