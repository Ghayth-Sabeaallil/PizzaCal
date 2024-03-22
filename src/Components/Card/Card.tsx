import Size from "../Size/Size"
import "./Card.css"




const Card = ({ pizzaDB }: any) => {
    return (<>
        <div className="card-div">
            {pizzaDB.map((pizza: any) => {
                return <img src={pizza.img} width="250" height="250" />
            })}
            <Size />
        </div>
    </>)
}

export default Card