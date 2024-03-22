import { useState } from "react"
import "./PizzaImgDiv.css"

const PizzaImgDiv = ({ pizzaDB }: any) => {
    const [id, setId] = useState(0);
    function clickhandle() {
        console.log("hi")
    }
    return (<>
        <div className="pizza-img-div">
            <h2>{pizzaDB[id].namn}</h2>
            <div className="img-arrow">
                <img onClick={() => setId((count) => (count > 0) ? count - 1 : 0)} src="../assets/img/left.png" alt="" />
                <img onClick={clickhandle} src={pizzaDB[id].img} width="250" height="250" />
                <img onClick={() => setId((count) => (count <= 5) ? count + 1 : 6)} src="../assets/img/right.png" alt="" />
            </div>
        </div>
    </>)
}

export default PizzaImgDiv;