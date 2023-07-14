import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validation } from "./validation";
import {getTemperaments, createDog} from "../../redux/actions"

const Form = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  
  const [form, setForm] = useState({
    name: "",
    image: "",
    height_max: "",
    height_min: "",
    weight_max: "",
    weight_min: "",
    life_span_max: "",
    life_span_min: "",
    temperaments: []
  });
  
  useEffect(() => {
    setErrors(validation(form));
  }, [form]);
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    height_min: "",
    weight_min: "",
    life_span_min: "",
    temperaments: []
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
console.log(errors)
    if (
      !errors.name &&
      !errors.height_min &&
      !errors.weight_min &&
      !errors.life_span_min &&
      !errors.temperaments ) {

      dispatch(createDog(form));
      alert("Dog created succesfully!");
      
      setForm({
        name: "",
          image: "",
          height_max: "",
          height_min: "",
          weight_max: "",
          weight_min: "",
          life_span_max: "",
          life_span_min: "",
          temperaments: []
      });
    } 
  };

  const selectHandler = (event) => {
    const selectedTempName = event.target.value;
    const selectedTempID = event.target.options[event.target.selectedIndex].id;
    const newState = {...form}

    newState.temperaments = [...newState.temperaments, {id: selectedTempID, name: selectedTempName}]
    setForm(newState);
  };

  const deleteTemp = (temperament) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter((temp) => temp !== temperament),
    })
  }
console.log(form.temperaments)
  return (
    <div>
      <h1>Create your own dog</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Breed</label>
          <input
            type="text"
            name="name"
            placeholder="e.g: Schnouzer"
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
            min="1"
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
            min="1"
            onChange={changeHandler}
            value={form.height_min}
          />
          {errors.height_min && <span>{errors.height_min}</span>}
        </div>
        <div>
          <label>Maximum weight</label>
          <input
            type="number"
            name="weight_max"
            min="1"
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
            min="1"
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
            min="1"
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
            min="1"
            onChange={changeHandler}
            value={form.life_span_min}
          />
          {errors.life_span_min && <span>{errors.life_span_min}</span>}
        </div>
        <div>
        <label>Image: </label>
        <input
          type="url"
          placeholder="e.g: http://myimageontheweb.com"
          value={form.image}
          onChange={changeHandler}
          name="image"
        />
      </div>
        <div>
          <label>Temperaments</label>
          <select
            name="temperaments"
            onChange={selectHandler}
          >
            {temperaments?.map((temperament) => (
              <option key={temperament.id} value={temperament.name} id={temperament.id} > {temperament.name}</option>
            ))}
          </select>
        </div>
        {errors.temperaments && <span>{errors.temperaments}</span>}

              <h2>Selected temperaments</h2>
              <div>
                {form.temperaments && form.temperaments.map((temperament) => (
                  <span key={temperament.id} onClick={()=> deleteTemp((temperament))}>{temperament.name}</span>
                ))}
              </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
