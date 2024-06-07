import React from "react";
import "./styles/App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Support from "./pages/Support";
import Signin from "./pages/Signin";
import Language from "./pages/Language";
import Trips from "./pages/Trips";
import Static from "./component/Static"
import Home from "./pages/Home";
import Lviv from "./pages/Lviv";
import Offerpage from "./pages/Offerpage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Static/>}>
          <Route index element={<Home/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/language" element={<Language/>} />
          <Route path="/trips" element={<Trips/>} />
          <Route path="/lviv" element={<Lviv/>}/>
          <Route path="/offerpage/:id" element={<Offerpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
