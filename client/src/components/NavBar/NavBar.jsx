import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={style.container} >
            <Link to="/home" > Home </Link>
            <Link to="/create" > Form </Link>
            <Link to="/about" > About </Link>
        </div>
    )
}

export default NavBar;