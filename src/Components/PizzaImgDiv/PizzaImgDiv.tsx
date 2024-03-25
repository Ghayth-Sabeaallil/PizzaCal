import { useContext, useState } from "react"
import "./PizzaImgDiv.css"
import { PizzaList } from "../PizzaType/PizzaType"
import { PizzaContext } from "../PizzaContext/PizzaContextProvider"

type PizzaProp = {
    pizzaDB: PizzaList[],
}

const PizzaImgDiv = ({ pizzaDB }: PizzaProp) => {
    const [id, setId] = useState(0);
    const [pizza, setPizza] = useState("");
    const { dispatch } = useContext(PizzaContext);


    const changeHandle: React.ChangeEventHandler<HTMLImageElement> = (e) => {
        setPizza(e.currentTarget.alt)
    }
    const clickHandle: React.FormEventHandler<HTMLDivElement> = () => {
        dispatch({
            type: "ADD",
            payload: { id: id },
        });
    }

    return (<>
        <div className="pizza-img-div">
            <h2>{pizzaDB[id].namn}</h2>
            <div className="img-arrow">
                <img onClick={() => setId((count) => (count > 0) ? count - 1 : 0)} src="../assets/img/left.png" alt="" />
                <img onLoad={changeHandle} className="pizza-img" src={pizzaDB[id].img} alt={pizzaDB[id].namn} width="300" height="300" />
                <img onClick={() => setId((count) => (count <= 5) ? count + 1 : 6)} src="../assets/img/right.png" alt="" />
            </div>
            <div className="containerBuy">
                <div className="cart-btn" onClick={clickHandle}><img width="45px" height="45px" src="../assets/img/cart.png" alt="cart" /></div>
            </div>
        </div>
    </>)
}

export default PizzaImgDiv;