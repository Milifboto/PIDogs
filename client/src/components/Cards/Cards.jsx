import { useSelector } from "react-redux"
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
    const dogs = useSelector(state => state.dogs)
return (
    <div className={style.container} >
        {dogs.map((dog) => {
            return <Card
            id = {dog.id}
            name = {dog.name}
            />
        })}
    </div>
)
}

export default Cards;