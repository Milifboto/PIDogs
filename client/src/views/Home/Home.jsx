import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css"
import { getDogs, setCurrentPage} from "../../redux/actions";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {
  const dispatch = useDispatch();
  
  const allDogs = useSelector((state) => state.copyDogs);
  const currentPage = useSelector((state) => state.currentPage);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage; 
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog); 

  const pagination = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };
 
  useEffect(() => { 
    dispatch(getDogs())
  }, [dispatch]);
  
  return (
    <div className={style.container} >
      <SideBar />
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
