import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Lviv.css";
import Lvivmap from "../photos/Lvivmap.png";
import Dropdawn from "../component/Dropdown";
import Dropdawn1 from "../component/Dropdown1";
import Dropdawn2 from "../component/Dropdown2";
import Cardestablishments from "../component/Cardestablishments";
import FilterFront from "../component/FilterFront";

function Lviv() {
    const [selected, setSelected] = useState("");
    const [selected_1, setSelected_1] = useState("");
    const [selected_2, setSelected_2] = useState("");
    // const [filters, setFilters] = useState([]);
    return (
      <>
        <div className="whereareyou1">
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
              <FilterFront/>
          </div>
          <div className="box-sb">
            <div className="mapp">
              <img src={Lvivmap} alt="Lvivmap" className="lvivmap1"/>
            </div>
            <div className="establishments">
              <Cardestablishments/>
              <Cardestablishments/>
              <Cardestablishments/>
              <Cardestablishments/>
              <Cardestablishments/>
              <Cardestablishments/>
              <Cardestablishments/>
              <Cardestablishments/>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Lviv;