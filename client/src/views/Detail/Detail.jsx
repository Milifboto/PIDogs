import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getDogDetail } from "../../redux/actions";
// import { useDispatch } from "react-redux";
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
  console.log(dogDetail)

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
    <div className={styles.container}>
      <h2>{name} </h2>
      <img src={image} alt={name} />
      <p>Height {height_min} - {height_max}</p>
      <p>Weight {weight_min} - {weight_max}</p>
      <p>Life Span {life_span_min} - {life_span_max} years</p>
      {temperament ? (
        <p>Temperament: {temperament?.join(", ")}</p>
      ) : (
        <p>Temperament: {temperament?.join(", ")}</p>
      )}
    </div>
  );
};

export default Detail;
