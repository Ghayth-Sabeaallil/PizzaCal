import { useState } from "react"
import "./PizzaImgDiv.css"
import { PizzaList } from "../PizzaType/PizzaType"

type PizzaProp = {
    pizzaDB: PizzaList[],
}

const PizzaImgDiv = ({ pizzaDB }: PizzaProp) => {
    const [id, setId] = useState(0);
    const [alt, seAlt] = useState("");
    console.log(alt)

    return (<>
        <div className="pizza-img-div">
            <h2>{pizzaDB[id].namn}</h2>
            <div className="img-arrow">
                <img onClick={() => setId((count) => (count > 0) ? count - 1 : 0)} src="../assets/img/left.png" alt="" />
                <img className="pizza-img" onChange={(e) => { seAlt(e.currentTarget.alt) }} src={pizzaDB[id].img} alt={pizzaDB[id].namn} width="300" height="300" />
                <img onClick={() => setId((count) => (count <= 5) ? count + 1 : 6)} src="../assets/img/right.png" alt="" />
            </div>
        </div>
    </>)
}

export default PizzaImgDiv;