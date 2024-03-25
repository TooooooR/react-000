import React, {useState} from "react";
import "../styles/Dropdawn1.css";
import dates from "../photos/dates.png";

function Dropdawn({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Тут буде календар"]
    return (
        <div className="dropdown1">
            <div className="dropdown-bth1" onClick={(e) => 
            setIsActive(!isActive)}>
                <div className="herna1">
                    <div className="icon1">
                        <img src={dates} alt="dates" className="dates"/>
                    </div>
                    {selected ? (<div>{selected}</div>) : (<div>Оберіть дату</div>)}
                </div>
            </div>
            {isActive && (
                <div className="dropdown-content1">
                    {options.map((option) => (
                        <div 
                            className="dropdown-item1"
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
  
  export default Dropdawn;