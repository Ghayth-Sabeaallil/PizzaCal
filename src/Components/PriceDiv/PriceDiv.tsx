//import
import { useContext } from "react"
import { OrderContext } from "../OrderContext/OrderContextProvider";

//Scss
import "./PriceDiv.scss"

const PriceDiv = () => {
    //useContext, to get data
    const { state, dispatch } = useContext(OrderContext);

    //remove pizza using uniq Id
    const handleRemove = (id: string) => {
        dispatch({ type: "REMOVE", payload: id });
    };

    //Set antal pizza using uniq Id (plus)
    const handleAntalPlus = (id: string, st: number) => {
        dispatch({ type: "EDIT", payload: id, antal: st + 1 });
    }

    //Set antal pizza using uniq Id (minus)
    const handleAntalMinus = (id: string, st: number) => {
        //can change only if antal bigger than 1
        if (st > 1) {
            dispatch({ type: "EDIT", payload: id, antal: st - 1 });
        }
    }
    return (
        <>{state &&
            <fieldset style={{ marginTop: "60px" }} className="priceFieldset" id="priceFieldset">
                <legend className="price-legend">Din Beställning</legend>
                {state.pizzas.map((o) => {
<<<<<<< HEAD
                    price.push((o.price + (o.extra.length * 5)));
                    return (<><div>
=======
                    return (<><div style={{ display: "grid" }}>
>>>>>>> origin/Ghayth
                        <div className="antal">
                            <span style={{ color: "#74993a", fontSize: "35px" }}>
                                {o.name}
                            </span>
                            <button onClick={() => handleAntalMinus(o.uuid, o.antal)}>-</button>
                            <span>{o.antal}</span>
                            <button onClick={() => handleAntalPlus(o.uuid, o.antal)}>+</button>
                            <div className="trash" onClick={() => handleRemove(o.uuid)}><img src="../../assets/img/trash.png" alt="trash" /></div>
                        </div>
                        {o.extra.length > 0 && (
                            <div>
                                <span style={{ color: "#4287f5" }}>~Tillägg~</span>
                                <ul>
                                    {o.extra.map((ingredient: string) =>
                                        <li key={ingredient} > {ingredient} x {o.antal}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                        {/* Displaying calculated price based on selected pizza and extra ingredients */}
                        <label>
                            <span style={{ color: "#438ba8" }}> price: </span>
                            <span style={{ color: "#c999be", fontSize: "40px" }}>
                                {(o.price + (o.extra.length * 5)) * o.antal} :-
                            </span>
                        </label>
                    </div>
                    </>)
                })}


            </fieldset>
        }</>
    )
}

export default PriceDiv