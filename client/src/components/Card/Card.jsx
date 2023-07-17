import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({id, name, image, height, weight, life_span}) => {
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
          {`Heigh ${height}`}
          <br />
          {`Weight ${weight}`}
          <br />
          {`Life span ${life_span}`}
          <br/>
        </p>
          <Link to={`/detail/${id}`}><button className={style.detail}>Detail</button></Link>
      </div>
      
    </div>
  );
};

export default Card;
