import style from "./About.module.css";
import aboutIMG from "../../assets/aboutIMG.jpg";
import githubIMG from "../../assets/github.png";
import linkedinIMG from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.textCointainer}>
      <div className={style.text}>
      <h1 className={style.title}>Hi there!</h1>
      <p className={style.paragraph}>
        My name is Milagros Fernández Boto. I´m on my way to become a Full Stack
        Developer. To create this Single Page Application I worked with
        Javascript, Node.js, Express, React, Redux, PostgreSQL and Sequelize.
      </p>
      <div className={style.logos}>
        <Link to="https://github.com/Milifboto" > <img src={githubIMG} alt="My GitHub" className={style.logo} /></Link>
        <Link to="https://www.linkedin.com/in/milagrosfboto/" ><img src={linkedinIMG} alt="My Linkedin"  className={style.logo} /></Link>
      </div>
      </div>
      </div>
      <div className={style.imageContainer}>
      <img className={style.aboutImage} src={aboutIMG} alt="About" />
      </div>
    </div>
  );
};

export default About;
