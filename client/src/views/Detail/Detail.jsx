import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [dogDetail, setDogDetail] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
      if (data[0].name) {
        setDogDetail(data[0]);
      } else {
        window.alert(`There are no dogs with the ID ${id}`);
      }
    });
    return setDogDetail({});
  }, [id]);

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
            ? `${height_min} - ${height_max} cm`
            : `${height_min} cm `}
        </p>
        <p className={style.atributeTitle}>Weight</p>
        <p className={style.atribute}>
          {weight_max
            ? ` ${weight_min} - ${weight_max} kg`
            : ` ${weight_min} kg `}
        </p>
        <p className={style.atributeTitle}>Life Span </p>
        <p className={style.atribute}>
          {life_span_max
            ? ` ${life_span_min} - ${life_span_max} years`
            : ` ${life_span_min} years `}
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
