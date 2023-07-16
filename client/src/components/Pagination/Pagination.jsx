import style from "./Pagination.module.css"

const Pagination = ({dogsPerPage, allDogs, pagination, currentPage}) => {
    const pageNumbers = [] // lo uso para almacenar los números de página.

    //Math.ceil redondeo hacia arriba para que se generen suficientes números de página para mostrar todos los perros.
    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i) //Agrego cada número de página al arreglo pageNumbers
    }
    return(
        <nav>
            <ul className={style.pageNumerList}>
                {
                    pageNumbers&&
                    pageNumbers.map((number) => ( // si pageNumbers existe, itero sobre cada número de página.
                        <li className={style.number} key={number}>
                            <div className={currentPage === number ? style.pageNumber__active : style.pageNumber} onClick={()=> pagination(number)}>{number}</div>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default Pagination;