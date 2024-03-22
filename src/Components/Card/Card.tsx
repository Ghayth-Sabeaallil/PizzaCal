import Size from "../Size/Size"
import "./Card.css"
import img from "./pizza.svg"
const Card = () => {
    return (<>
        <div className="card-div">
            <img src={img} width="400" height="400" />
            <Size />
        </div>
    </>)
}

export default Card