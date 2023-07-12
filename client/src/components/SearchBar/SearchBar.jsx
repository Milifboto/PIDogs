import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [name, setName] = useState([]);

   const handleChange = (event) => {
    setName(event.target.value)
   }

   return (
      <div>
          <input className={style.search} onChange={handleChange} value={name} />
         <button className={style.button} onClick={()=>onSearch(name)}>Search</button> 
      </div>
   );
}
