import { useState } from "react"
import "./PizzaAntalDiv.css"

const PizzaAntalDiv = () => {
    const [antal, setAntal] = useState(0);
    return (
        <>
            <div className="containerAntal">
                <div unselectable="on" className="decrement" onClick={() => setAntal((antal) => (antal > 0) ? antal - 1 : 0)}>-</div>
                <p className="antal">{antal}</p>
                <div unselectable="off" className="increment" onClick={() => setAntal((antal) => antal + 1)}>+</div>

            </div>
        </>
    )
}

export default PizzaAntalDiv