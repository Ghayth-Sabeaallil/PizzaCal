import { useContext, useState } from "react"
import "./PizzaImgDiv.scss"
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
        const ingredienserDiv = document.getElementById('ingredienserDiv');
        const root = document.getElementById('root');
        if (ingredienserDiv && root) {
            ingredienserDiv.style.visibility = 'hidden';
        }
        setPizza(e.currentTarget.alt)
    }
    const clickHandle: React.FormEventHandler<HTMLDivElement> = () => {
        const ingredienserDiv = document.getElementById('ingredienserDiv');
        const root = document.getElementById('root');

        if (ingredienserDiv && root) {
            ingredienserDiv.style.display = 'flex';
            ingredienserDiv.style.visibility = 'visible';
            root.style.display = 'grid';
            root.style.gridTemplateColumns = '1fr 2fr 1fr'

        }
        dispatch({
            type: "SELECT",
            payload: { id: id },
        });
    }

    return (<>
        <div className="pizza-img-div">
            <h2 className="pizza-namn">{pizzaDB[id].namn} / {pizzaDB[id].pris}:-</h2>
            <div className="img-arrow">
                <img onClick={() => setId((count) => (count > 0) ? count - 1 : 0)} src="../assets/img/left.png" alt="left-arrow" />
                <img onLoad={changeHandle} className="pizza-img" src={pizzaDB[id].img} alt={pizzaDB[id].namn} width="300" height="300" />
                <img onClick={() => setId((count) => (count <= 5) ? count + 1 : 6)} src="../assets/img/right.png" alt="right-arrow" />
            </div>
            {/* <div className="pizza-size">
                <button><img src="../assets/img/person.png" alt="person" /></button>
                <button><img src="../assets/img/family.png" alt="person" /></button>
            </div>*/}

            <div className="containerBuy">
               <div className="select-btn" onClick={clickHandle}>✓Select</div>           
            </div>
        </div>
    </>)
}

export default PizzaImgDiv;