import React, {useState} from "react";
import "../styles/Dropdawn2.css";
import people from "../photos/people.png";

function Dropdawn({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["0-20", "20-50", "50-100", "100-250", "250+"]
    return (
        <div className="dropdown2">
            <div className="dropdown-bth2" onClick={(e) => 
            setIsActive(!isActive)}>
                <div className="herna2">
                    <div className="icon2">
                        <img src={people} alt="people" className="people"/>
                    </div>
                    {selected ? (<div>{selected}</div>) : (<div>Кількість людей</div>)}
                </div>
            </div>
            {isActive && (
                <div className="dropdown-content2">
                    {options.map((option) => (
                        <div 
                            className="dropdown-item2"
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