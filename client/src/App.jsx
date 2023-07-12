import { Home, Landing, Detail, Form, About } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./App.css";



function App() {
  const {pathname} = useLocation();

  const [dogs, setDogs] = useState([]);


  return (
    <div className="App">
        {pathname !== "/" && <NavBar/> }
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
