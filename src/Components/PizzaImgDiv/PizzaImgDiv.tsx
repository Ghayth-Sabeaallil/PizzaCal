//import
import { useContext, useState } from "react"
import { PizzaList } from "../PizzaType/PizzaType"
import { PizzaContext } from "../PizzaContext/PizzaContextProvider"

//Scss
import "./PizzaImgDiv.scss"

//prop of type
type PizzaProp = {
    pizzaDB: PizzaList[],
}

const PizzaImgDiv = ({ pizzaDB }: PizzaProp) => {
    //useState, to select pizza when we click on arrow btn
    const [id, setId] = useState(0);
    //useContext, to send Pizza Id to Ingredienser and show it
    const { dispatch } = useContext(PizzaContext);

    //On img load (when we select another pizza) ingredienserDiv visibility will be hidden 
    const changeHandle: React.ChangeEventHandler<HTMLImageElement> = () => {
        const ingredienserDiv = document.getElementById('ingredienserDiv');
        const root = document.getElementById('root');
        if (ingredienserDiv && root) {
            ingredienserDiv.style.visibility = 'hidden';
        }
    }

    //on click btn, show ingredienserDiv and send data to useContext
    const clickHandle: React.FormEventHandler<HTMLDivElement> = () => {
        const ingredienserDiv = document.getElementById('ingredienserDiv');
        const root = document.getElementById('root');
        //show ingredienserDiv depends on pizza Id
        if (ingredienserDiv && root) {
            ingredienserDiv.style.display = 'flex';
            ingredienserDiv.style.visibility = 'visible';
            root.style.display = 'flex';
            // send data to useContext
        }
        dispatch({
            type: "SELECT",
            payload: { pizzaId: id },
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
            <div className="containerBuy">
                <div className="select-btn" onClick={clickHandle}>✓Select</div>
            </div>
        </div>
    </>)
}

export default PizzaImgDiv;