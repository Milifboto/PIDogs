import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperaments,
  orderedAlphabeticallyAndByWeight,
  reset,
  filterByTemperament,
  filterByOrigin
} from "../../redux/actions";
import style from "./SideBar.module.css";

const SideBar = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const allTemps = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

 const temperamentFilterHandler = (event) => {
  const value = event.target.value;
  dispatch(filterByTemperament(value)); 
  setCurrentPage(1)
};

  function handleSortAlphabeticallyAndByWeight(event) {
    dispatch(orderedAlphabeticallyAndByWeight(event.target.value));
    setCurrentPage(1);
  }

  function filterOriginHandler(event) {
    const value = event.target.value;
    dispatch(filterByOrigin(value))
    setCurrentPage(1)
  }

  function handleReset() {
    dispatch(reset());
    setCurrentPage(1);
  }

  return (
    <div className={style.container}>
      <div className={style.selectContainer}>
        <select
          placeholder="Order"
          onChange={handleSortAlphabeticallyAndByWeight}
          className={style.select}
        >
          {["A-Z", "Z-A", "lighter to heavier", "heavier to lighter"].map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </select>
      </div>

      <div className={style.selectContainer}>
        <select
          name="origin"
          value="dog"
          onChange={filterOriginHandler}
          className={style.selectFilter}
        >
          <option>Select origin</option>
          <option value="all">All</option>
          <option name="New breeds" value="New breeds">
            New breeds
          </option>
          <option name="Breeds API" value="Breeds API">
            Other breeds
          </option>
        </select>
      </div>

      <div className={style.selectContainer}>
        <select 
        placeholder="temperaments" 
        onChange={temperamentFilterHandler}
        className={style.selectFilter}
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
            <div className={style.selectContainer}>
              <button className={style.reset} onClick={handleReset}>Reset</button>
            </div>
      
    </div>
  );
};

export default SideBar;
