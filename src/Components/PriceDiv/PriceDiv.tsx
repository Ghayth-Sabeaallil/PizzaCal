import { useContext, useState } from "react"
import "./PriceDiv.scss"
import { OrderContext } from "../OrderContext/OrderContextProvider";


const PriceDiv = () => {
    const { state, dispatch } = useContext(OrderContext);
    const [antal, setAntal] = useState(1);

    let price: number[] = [];


    return (
        <>{
            <fieldset style={{ marginTop: "60px" }} className="priceFieldset" id="priceFieldset">
                <legend className="price-legend">Din Beställning</legend>
                {state.pizzas.map((o) => {
                    price.push((o.price + (o.extra.length * 5)));
                    return (<><div style={{ display: "grid" }}>
                        <div className="antal">
                            <span style={{ color: "#74993a", fontSize: "35px" }}>
                                {o.name}
                            </span>
                            <button id={o.id.toString()} >-</button>
                            <span>{antal}</span>
                            <button id={o.id.toString()} >+</button>
                        </div>

                        {/* Displaying calculated price based on selected pizza and extra ingredients */}
                        <label>
                            <span style={{ color: "#438ba8" }}> price: </span>
                            <span style={{ color: "#c999be", fontSize: "40px" }}>

                                {(o.price + (o.extra.length * 5)) * antal} :-
                            </span>
                        </label>
                        {o.extra.length > 0 && (
                            <div>
                                <span style={{ color: "black" }}>Tillägg</span>
                                <ul>
                                    {o.extra.map((ingredient: string) =>
                                        <li key={ingredient} > {ingredient} x {antal}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div></>)
                })}
                <label>
                    <span style={{ color: "#438ba8" }}> Total: </span>
                    <span style={{ color: "#c999be", fontSize: "40px" }}>
                        {price.reduce((partialSum, a) => partialSum + a, 0)}
                    </span>
                </label>

            </fieldset>
        }</>
    )
}

export default PriceDiv