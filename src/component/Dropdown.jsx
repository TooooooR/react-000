import React, {useState} from "react";
import "../styles/Dropdawn.css";
import iconofsearch from "../photos/iconofsearch.png";

function Dropdawn({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Львів", "Рівне", "Київ", "Вінниця"]
    return (
        <div className="dropdown">
            <div className="dropdown-bth" onClick={(e) => setIsActive(!isActive)}>
                <div className="herna">
                    <div className="icon">
                        <img src={iconofsearch} alt="iconofsearch" className="iconofsearch"/>
                    </div>
                    {selected ? (<div>{selected}</div>) : (<div>Ваше місто</div>)}
                </div>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div 
                            className="dropdown-item"
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