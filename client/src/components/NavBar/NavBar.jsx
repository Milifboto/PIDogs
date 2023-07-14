import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import pawprint from "../../assets/pawprint.png";

//tengo que hacer la fn onSearch
const NavBar = () => {
    return (
        <div className={style.container} >
            <Link to="/"><img src={pawprint} alt="pawprint" className={style.pawprint} /></Link>
            <Link to="/home" className={style.links}>Home</Link>
            <Link to="/create" className={style.links}>Create your dog</Link>
            <Link to="/about" className={style.links}>About</Link>

            <div>
                <SearchBar className={style.searchBar} > </SearchBar>
            </div>
        </div>
    )
}

export default NavBar;