import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getDogs } from "../../redux/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDogs())
    },[])
return (
    <div>
        <h1>Estás en Home</h1>
        <Cards/>
    </div>
)
} 

export default Home;