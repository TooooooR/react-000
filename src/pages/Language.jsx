import React from "react";
import "../styles/Static.css";
import Cardestablishments from "../component/Cardestablishments";

function Language() {
    return (
      <>
      <h1 className="languageHeader">
        Змініть мову на яку хочете
      </h1>
      <div>
        <Cardestablishments/>
      </div>
      </>
    );
  }

export default Language;