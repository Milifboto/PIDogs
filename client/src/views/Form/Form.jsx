import { useState } from "react";
import axios from "axios";
import {validation} from "./validation";


const URL = "http://localhost:3001/dogs";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    height_max: "",
    height_min: "",
    weight_max: "",
    weight_min: "",
    life_span_max: "",
    life_span_min: "",
    first_temperament: "",
    second_temperament: "",
    third_temperament: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    height_max: "",
    height_min: "",
    weight_max: "",
    weight_min: "",
    life_span_max: "",
    life_span_min: "",
    first_temperament: "",
  });


  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };

  const submitHandler = (event) => {

  event.preventDefault();

  if(!form.name || !form.height_max ||  !form.height_min || !form.weight_max || !form.weight_min || !form.life_span_max || !form.life_span_min || !form.first_temperament){
   return alert("You must complete all fields in order to create your dog")
  } 
  axios.post(URL, form)
  .then(res=> alert(res))
  .catch(error=>error(error))
  alert("Dog created succesfully!");
  }

  return (
    <div>
      <h1>Estás en Form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={form.name}
          />
          {errors.name && <span>{errors.name}</span>} 
        </div>
        <div>
          <label>Maximum height</label>
          <input
            type="number"
            name="height_max"
            onChange={changeHandler}
            value={form.height_max}
          />
          {errors.height_min && <span>{errors.height_min}</span>} 
        </div>
        <div>
          <label>Minimum height</label>
          <input
            type="number"
            name="height_min"
            onChange={changeHandler}
            value={form.height_min}
          />
          {errors.height_min && <span>{errors.height_min}</span>} 
        </div>
        <div>
          <label>Maximum weight</label>
          <input
            type="number"
            name=" weight_max"
            onChange={changeHandler}
            value={form.weight_max}
          />
          {errors.weight_min && <span>{errors.weight_min}</span>} 
        </div>
        <div>
          <label>Minimum weight</label>
          <input
            type="number"
            name="weight_min"
            onChange={changeHandler}
            value={form.weight_min}
          />
          {errors.weight_min && <span>{errors.weight_min}</span>} 
        </div>
        <div>
          <label>Maximum life span</label>
          <input
            type="number"
            name="life_span_max"
            onChange={changeHandler}
            value={form.life_span_max}
          />
          {errors.life_span_min && <span>{errors.life_span_min}</span>} 
        </div>
        <div>
          <label>Minimum life span</label>
          <input
            type="number"
            name="life_span_min"
            onChange={changeHandler}
            value={form.life_span_min}
          />
          {errors.life_span_min && <span>{errors.life_span_min}</span>}
        </div>
        <div>
          <label>First temperament</label>
          <select 
            placeholder= "first_temperament"
            name="first_temperament"
            onChange={changeHandler}>
              {/* {let dogsAPI = axios.get(URL);
              dogsAPI.data.map((dog) => (
                    <option value={dog.temperament}>{dog.temperament}</option>
                ))}
               */}
            </select>
          {errors.first_temperament && <span>{errors.first_temperament}</span>}
        </div> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
