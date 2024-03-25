import React from "react";
import {Link} from "react-router-dom";
import "../styles/Static.css";
import mainlogo from "../photos/mainlogo.png";
import language from "../photos/language.png";


function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="team_name"><img src={mainlogo} alt="logo" className="mainlogo"/></Link>
            <Link to="/language" className="language"><img src={language} alt="logo" className="mainlanguage"/></Link>
            <Link to="/support" className="support">Support</Link>
            <Link to="/trips" className="trips">Trips</Link>
            <Link to="/signin" className="signin">Sign in</Link>
        </div>
    );
  }

export default Navbar;