import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName, getDogs } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
   const dispatch = useDispatch();

   const [search, setSearch] = useState("");


   const searchHandler = (event) => {
     setSearch(event.target.value);
     if(search === ""){
      dispatch(getDogs())
     }
   };
 
   const submitHandler = (event) => {
    event.preventDefault();
    
     dispatch(getDogByName(search));
     setSearch("");

   };

  return (
    <div>
      <input
        id="search"
        placeholder="Search by breed..."
        type="text"
        value={search}
        onChange={searchHandler}
      />
      <button className={style.button} onClick={(event) => submitHandler(event)}>
        Search
      </button>
    </div>
  );
}