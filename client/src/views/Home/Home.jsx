import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getDogs } from "../../redux/actions";
import style from "./Home.module.css"

import { orderedAlphabetically, orderedByWeight } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleSortAlphabetically(event) {
    dispatch(orderedAlphabetically(event.target.value));
  }

  function handleSortWeight(event) {
    dispatch(orderedByWeight(event.target.value));
  }

  return (
    <div className={style.container} >
      <div className={style.filtros} >
        <select
        placeholder="Order alphabetically"
        onChange={handleSortAlphabetically}
        className={style.select}
      >
        {["A-Z", "Z-A"].map((order) => (
          <option value={order}>{order}</option>
        ))}
      </select> 
      </div>
      <Cards />
    </div>
  );
};

export default Home;
