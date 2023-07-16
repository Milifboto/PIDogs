import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validation } from "./validation";
import { getTemperaments} from "../../redux/actions";
import axios from "axios";
import style from "./Form.module.css";

const Form = () => {
  const allTemperaments = useSelector((state) => state.temperaments);
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
    temperament: [],
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
    temperaments: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      errors.name ||
      errors.height_min ||
      errors.weight_min ||
      errors.life_span_min ||
      errors.temperaments
    ) {
      alert("You must complete all fields to create a dog");
    } else {
      const response = axios
        .post("http://localhost:3001/dogs", {
          ...form,
          temperament: form.temperament.map((temp) => temp.id),
        })
        .then((res) => {
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
            temperament: [],
          }); //Limpio mi form después de mandarlo
        });
      }};

  const selectHandler = (event) => {
    const selectedTempName = event.target.value;
    const selectedTempID = event.target.options[event.target.selectedIndex].id;
    const newState = { ...form };

    newState.temperament = [
      ...newState.temperament,
      { id: selectedTempID, name: selectedTempName },
    ];
    setForm(newState);
  };

  const deleteTemp = (temperament) => {
    setForm({
      ...form,
      temperament: form.temperament.filter((temp) => temp !== temperament),
    });
  };
  return (
    <div className={style.container}>
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
          {errors.name && <span className={style.errors}>{errors.name}</span>}
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
          {errors.height_min && (
            <span className={style.errors}>{errors.height_min}</span>
          )}
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
          {errors.height_min && (
            <span className={style.errors}>{errors.height_min}</span>
          )}
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
          {errors.weight_min && (
            <span className={style.errors}>{errors.weight_min}</span>
          )}
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
          {errors.weight_min && (
            <span className={style.errors}>{errors.weight_min}</span>
          )}
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
          {errors.life_span_min && (
            <span className={style.errors}>{errors.life_span_min}</span>
          )}
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
          {errors.life_span_min && (
            <span className={style.errors}>{errors.life_span_min}</span>
          )}
        </div>
        <div>
          <label>Image </label>
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
          <select name="temperament" onChange={selectHandler}>
            {allTemperaments?.map((temperament) => (
              <option
                key={temperament.name}
                value={temperament.name}
                id={temperament.id}
              >
                {" "}
                {temperament.name}
              </option>
            ))}
          </select>
        </div>
        {errors.temperaments && (
          <span className={style.errors}>{errors.temperaments}</span>
        )}

        <h2>Selected temperaments</h2>
        <div>
          {form.temperament &&
            form.temperament.map((temp) => (
              <span
                key={temp.id}
                onClick={() => deleteTemp(temp)}
              >
                {temp.name}
              </span>
            ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
