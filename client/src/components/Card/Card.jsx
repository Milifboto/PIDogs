import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({id, name, image, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max,}) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img
          src={image}
          className={style.dogImage}
          alt={name}
        />
      </div>
        
      <div className={style.atributes} >
      <h3 className={style.name}>{name}</h3>
        <p>
          { height_max ? `Heigh ${height_min} - ${height_max} cm` : `Heigh ${height_min} cm `}
          <br />
          { weight_max ? `Weight ${weight_min} - ${weight_max} kg` : `Weight ${weight_min} kg `}
          <br />
          { life_span_max ? `Life span ${life_span_min} - ${life_span_max} years` : `Life span ${life_span_min} years `}
          <br/>
        </p>
          <Link to={`/detail/${id}`}><button className={style.detail}>Detail</button></Link>
      </div>
      
    </div>
  );
};

export default Card;
