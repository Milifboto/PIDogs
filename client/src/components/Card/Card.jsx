import style from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={style.container} >
            <p>
                 {props.name}
            </p>
        </div>
    )
    }
    
    export default Card;