import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css"
import { getDogs} from "../../redux/actions";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {
  const dispatch = useDispatch();
  
  const allDogs = useSelector((state) => state.copyDogs);
  const [currentPage, setCurrentPage] = useState(1); //estado que almacena el número de página actual.
  const [dogsPerPage] = useState(8); //almacena la cantidad de perros por página.
  const indexOfLastDog = currentPage * dogsPerPage; //calcula el índice del último perro en la página actual (pag 1, 9 perros)
  const indexOfFirstDog = indexOfLastDog - dogsPerPage; // calcula el índice del primer perro en la página actual (9 - 9)
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog); // muestra solo los perros de la página actual.
  // Toma dos parámetros: el índice inicial y el índice final de la porción que quiero obtener.
  const pagination = (pageNumber) => { // función que recibe un número de página y actualiza el estado de currentPage con ese valor.
    setCurrentPage(pageNumber);
  };
 
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  return (
    <div className={style.container} >
      <SideBar setCurrentPage={setCurrentPage} />
      <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      <Cards currentDogs ={currentDogs} />
    </div>
  );
};

export default Home;
