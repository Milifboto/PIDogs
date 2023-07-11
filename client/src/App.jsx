import { Home, Landing, Detail, Form, About } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./App.css";



function App() {
  const {pathname} = useLocation();

  const [dogs, setDogs] = useState([]);

async function onSearch(name) {
  
    const response = await axios.get("http://localhost:3001/dogs");
    const data = response.data;
    const searchedDog = data.filter((dog) => dog.name === name);
    const id = searchedDog.id
try { 
  const dogResponse = await axios.get(`http://localhost:3001/dogs${id}`);
  const dogData = dogResponse.data;

      if (dogData.name && dogs.find((dog) => dog.id === dogData.id)) {
        window.alert("This dog has already been found")
      } else if (dogData.name) {
        setDogs((oldDogs) => [...oldDogs, dogData]);
      } else {
        window.alert(`There are no ${dogData.name} dogs`)
      }

  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="App">
        {pathname !== "/" && <NavBar onSearch={onSearch}/> }
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
