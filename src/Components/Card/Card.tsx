import Size from "../Size/Size"
import "./Card.css"

let id: number = 1;



const Card = ({ pizzaDB }: any) => {
    return (<>
        <div className="card-div">
            <img src="../assets/img/left.png" alt="" />
            {pizzaDB.map((pizza: any) => {
                return <img src={pizza.img} width="250" height="250" />
            })}
            <img src="../assets/img/right.png" alt="" />

            <Size />
        </div>
    </>)
}

export default Card