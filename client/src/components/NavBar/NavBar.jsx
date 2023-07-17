import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import pawprint from "../../assets/pawprint.png";
import arrow from "../../assets/arrow.png";

//tengo que hacer la fn onSearch
const NavBar = () => {
    return (
        <div className={style.container} >
            <Link to="/" className={style.links}><img src={arrow} alt="arrow" className={style.arrow} /></Link>
            <Link to="/create" className={style.links}>Create your dog</Link>
            <Link to="/home"><img src={pawprint} alt="pawprint" className={style.pawprint} /></Link>
            <Link to="/about" className={style.links}>About</Link>

            <div>
                <SearchBar className={style.searchBar} > </SearchBar>
            </div>
        </div>
    )
}

export default NavBar;