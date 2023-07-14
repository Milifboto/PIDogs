import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  const dogs = useSelector((state) => state.dogs);
  return (
    <div className={style.container}>
      {dogs.map(
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
              height={`${height_min} - ${height_max}`}
              weight={`${weight_min} - ${weight_max}`}
              life_span={`${life_span_min} - ${life_span_max} years`}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
