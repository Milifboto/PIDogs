import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperaments,
  orderedAlphabetically,
  reset,
  filterByTemperament,
} from "../../redux/actions";
import style from "./SideBar.module.css";

const SideBar = () => {
  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.dogs);

  const allTemps = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

 const temperamentFilterHandler = (event) => {
  const selectedOptions = Array.from(event.target.selectedOptions);
  const selectedTemperaments = selectedOptions.map((option) => option.value);
  setSelectedTemperaments(selectedTemperaments);
  dispatch(filterByTemperament(selectedTemperaments));
};

  function handleSortAlphabetically(event) {
    dispatch(orderedAlphabetically(event.target.value));
  }

  function handleReset(event) {
    dispatch(reset());
  }

  return (
    <div className={style.container}>
      <div className={style.filtros}>
        <select
          placeholder="Order alphabetically"
          onChange={handleSortAlphabetically}
          className={style.select}
        >
          {["A-Z", "Z-A"].map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </select>
      </div>

      <div className={style.filtros}>
        <select 
        placeholder="temperaments" 
        onChange={temperamentFilterHandler}
        className={style.select}
        >
            
        
          {allTemps?.map((temperament) => (
            <option
              key={temperament.name}
              id={temperament.id}
              value={temperament.name}
            >
              {temperament.name}
            </option>
          ))}
        </select>
      </div >

      <button className={style.reset} onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default SideBar;
