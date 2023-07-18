import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [dogDetail, setDogDetail] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
      if (data[0].name) {
        setDogDetail(data[0]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setDogDetail({});
  }, [id]);
  console.log(dogDetail);

  const {
    name,
    image,
    height_max,
    height_min,
    weight_max,
    weight_min,
    life_span_max,
    life_span_min,
    temperament,
  } = dogDetail;
  return (
    <div className={style.container}>
      <div className={style.textCointainer}>
        <h2 className={style.name}>{name} </h2>
        <p className={style.atributeTitle}>Height</p>
        <p className={style.atribute}>
          {height_max
            ? `Heigh ${height_min} - ${height_max} cm`
            : `Heigh ${height_min} cm `}
        </p>
        <p className={style.atributeTitle}>Weight</p>
        <p className={style.atribute}>
          {weight_max
            ? `Weight ${weight_min} - ${weight_max} kg`
            : `Weight ${weight_min} kg `}
        </p>
        <p className={style.atributeTitle}>Life Span </p>
        <p className={style.atribute}>
          {life_span_max
            ? `Life span ${life_span_min} - ${life_span_max} years`
            : `Life span ${life_span_min} years `}
        </p>
        <p className={style.atributeTitle}>Temperaments</p>
        <p className={style.atributeTemp}>{temperament?.join(", ")} </p>
      </div>
      <div>
        <img src={image} alt={name} className={style.image} />
      </div>
    </div>
  );
};

export default Detail;
