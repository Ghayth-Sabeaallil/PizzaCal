import { useState } from "react"
import "./PriceDiv.scss"

const PriceDiv = ({ selectedPizza, extraIngredients }: any) => {
    const [antal, setAntal] = useState(1);
    return (
        <>{selectedPizza && (
            <fieldset style={{ marginTop: "60px" }} className="priceFieldset" id="priceFieldset">
                <legend className="price-legend">Din Beställning</legend>
                <div style={{ display: "grid" }}>
                    <div className="antal">
                        <span style={{ color: "#74993a", fontSize: "35px" }}>
                            {selectedPizza?.namn}
                        </span>
                        <button onClick={() => setAntal((antal) => (antal > 1) ? antal - 1 : 1)}>-</button>
                        <span>{antal}</span>
                        <button onClick={() => setAntal((antal) => antal + 1)}>+</button>
                    </div>

                    {/* Displaying calculated price based on selected pizza and extra ingredients */}
                    <label>
                        <span style={{ color: "#438ba8" }}> price: </span>
                        <span style={{ color: "#c999be", fontSize: "40px" }}>

                            {(selectedPizza?.pris + (extraIngredients.length * 5)) * antal} :-
                        </span>
                    </label>
                    {extraIngredients.length > 0 && (
                        <div>
                            <span style={{ color: "black" }}>Tillägg</span>
                            <ul>
                                {extraIngredients.map((ingredient: string) =>
                                    <li key={ingredient} > {ingredient} x {antal}</li>
                                )}
                            </ul>
                        </div>
                    )}

                </div>
            </fieldset>
        )}</>
    )
}

export default PriceDiv