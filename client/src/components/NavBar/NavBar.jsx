import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({onSearch}) => {
    return (
        <div className={style.container} >
            <Link to="/home" > Home </Link>
            <Link to="/create" > Form </Link>
            <Link to="/about" > About </Link>

            <div>
                <SearchBar className={style.searchBar} onSearch={onSearch} > </SearchBar>
            </div>
        </div>
    )
}

export default NavBar;