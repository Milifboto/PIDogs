import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ currentDogs }) => {
  return (
    <div className={style.container}>
      {currentDogs?.map(
        ({
          id,
          name,
          image,
          height_min,
          height_max,
          weight_min,
          weight_max,
          life_span_min,
          life_span_max,
        }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              height_min={height_min}
              height_max={height_max}
              weight_min={weight_min}
              weight_max={weight_max}
              life_span_min={life_span_min}
              life_span_max={life_span_max}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
