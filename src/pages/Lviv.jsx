import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Lviv.css";
import Dropdawn from "../component/Dropdown";
import Dropdawn1 from "../component/Dropdown1";
import Dropdawn2 from "../component/Dropdown2";
import CardEstablishments_2 from "../component/CardEstablishments_2.jsx";
import Filter from "../component/Filter";
import AppLoyaut from "../map/AppLoyaut.js";


function Lviv() {
    const [selected, setSelected] = useState("");
    const [selected_1, setSelected_1] = useState("");
    const [selected_2, setSelected_2] = useState(""); 
    const [responseData, setResponseData] = useState([]);
    
    return (
      <>
        <div className="whereareyou1">
          {/* <form onSubmit={() => {}}>
            <input
              type = "text"
              name= {"username"}
            />
            <button>send</button>
          </form> */}
          Where are you?
        </div>
            
        <div className="select-dropdowns1">
          <Dropdawn selected={selected} setSelected={setSelected}/>
          <Dropdawn1 selected={selected_1} setSelected={setSelected_1}/>
          <Dropdawn2 selected={selected_2} setSelected={setSelected_2}/>
          <button className="mainsearch1">
            <Link to="/lviv" className="mainsearch-lviv1">Search</Link>
          </button>
        </div>

        <div className="select_product">
          <div className="filter">
            <Filter setResponseData={setResponseData} />
          </div>
          <div className="box-sb">
            <div className="mapp">
              {/* <img src={Lvivmap} alt="Lvivmap" className="lvivmap1"/> */}
              <AppLoyaut/>
            </div>
            <div className="establishments">
              <CardEstablishments_2 results={responseData}/>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Lviv;