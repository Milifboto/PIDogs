import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validation } from "./validation";
import { getTemperaments} from "../../redux/actions";
import axios from "axios";
import style from "./Form.module.css";
import image from "../../assets/createdog.png";

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
  console.log(form);

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
    setErrors(validation({ ...form, [property]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      errors.name ||
      errors.image ||
      errors.height_min ||
      errors.weight_min ||
      errors.life_span_min ||
      errors.temperaments.length !== 0
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
    if(event.target.value && !form.temperament.some((temp) => temp.name === event.target.value)) {
      const selectedTempName = event.target.value;
      const selectedTempID = event.target.options[event.target.selectedIndex].id;
      const newState = { ...form };
  
      newState.temperament = [
        ...newState.temperament,
        { id: selectedTempID, name: selectedTempName },
      ];
      setErrors(validation(newState));
      setForm(newState);
    }
  };

  const deleteTemp = (temperament) => {
      let newTemps =  form.temperament.filter((temp) => temp !== temperament)
    setForm({
      ...form,
      temperament: newTemps
    });
    setErrors(validation({
      ...form,
      temperament: newTemps
    }))
  };
  return (
    <div className={style.container}>
      <div className={style.formCointainer}>
      <form onSubmit={submitHandler} className={style.form} >
      <h1 className={style.title}>Create your own dog</h1>
        <div>
          <label className={style.label}>Breed</label>
          <input
          className={style.input}
            type="text"
            name="name"
            placeholder="e.g: Schnouzer"
            onChange={changeHandler}
            value={form.name}
          />
          {errors.name && (<span className={style.errors}>{errors.name}</span>)}
        </div>
        <div>
          <label className={style.label}>Maximum height</label>
          <input
          className={style.input}
            type="number"
            name="height_max"
            min="1"
            onChange={changeHandler}
            value={form.height_max}
          />
          {errors.height_min && (<span className={style.errors}>{errors.height_min}</span>)}
        </div>
        <div>
          <label className={style.label}>Minimum height</label>
          <input
            className={style.input}
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
          <label className={style.label}>Maximum weight</label>
          <input
          className={style.input}
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
          <label className={style.label}>Minimum weight</label>
          <input
          className={style.input}
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
          <label className={style.label}>Maximum life span</label>
          <input
          className={style.input}
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
          <label className={style.label}>Minimum life span</label>
          <input
          className={style.input}
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
          <label className={style.label}>Image </label>
          <input
          className={style.selectImage}
            type="url"
            placeholder="e.g: http://myimageontheweb.com"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />
          {errors.image && (
            <span className={style.errors}>{errors.image}</span>
          )}
        </div>
        <div>
          <label className={style.label}>Temperaments</label>
          <select className={style.select} name="temperament" onChange={selectHandler}>
            {allTemperaments?.map((temperament, index) => (
              <option
                key={`${temperament.id}-${index}`}
                value={temperament.name}
                id={temperament.id}
              >
                {" "}
                {temperament.name}
              </option>
            ))}
          </select>
          {errors.temperaments && (<span className={style.errors}>{errors.temperaments}</span>)}
        </div>
        <h3 className={style.selectedTempsTitle}>Selected temperaments</h3>
        <div className={style.label}>
          {form.temperament &&
            form.temperament.map((temp) => (
              <span
                key={temp.id}
                onClick={() => deleteTemp(temp)}
                className={style.spanTemp}
              >
                {temp.name}
              </span>
            ))}
        </div>
        <button type="submit" className={style.submit}>Submit</button>
      </form>
      </div>
      <div className={style.imageContainer}>
      <img src={image} alt="Create Dog Image" className={style.image}/>
      </div>
    </div>
  );
};
export default Form;
