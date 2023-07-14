import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import landingPhoto from "../../assets/landingPhoto.jpg";

const Landing = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title} >Welcome to Woofys</h1>
        <Link to="/home">
          {" "}
          <button className={style.button}> Home </button>{" "}
        </Link>
      </div>
      <div className={style.imageContainer} >
        <img
          src={landingPhoto}
          alt="landingPhoto"
          className={style.landingPhoto}
        />
      </div>
    </div>
  );
};

export default Landing;
