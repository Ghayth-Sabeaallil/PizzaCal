import { useContext } from "react";
import { PizzaContext } from "../PizzaContext/PizzaContextProvider";
import pizzaDB from "../../../assets/pizza.json";
import extra from "../../../assets/extra.json";

import "./Ingredienser.css";

const Ingredienser = () => {
  const { state } = useContext(PizzaContext);

  return (
    <>
      <fieldset className="pizzaFieldset">
        <legend className="main-legend">Ingredienser</legend>
        <fieldset>
          <legend className="defult-legend">Basic ingredienser</legend>
          {state.pizzas.map((m) => {
            return pizzaDB[m.id].ingredienser.map((i) => {
              return (
                <div className="defult-ingredienser" key={i}>
                  <input type="checkbox" id={i} name={i} />
                  <label>{i}</label>
                </div>
              );
            });
          })}
        </fieldset>
      </fieldset>

      <fieldset className="ingredientsFieldset">
        <legend className="extra-legend">Extra ingredienser 5kr/st</legend>
        {extra[0].extraIngredienser.map((x) => {
          return (
            <div className="defult-ingredienser" key={x}>
              <div>
                <input type="checkbox" id={x} name={x} />
                <label>{x}</label>
              </div>
            </div>
          );
        })}
      </fieldset>
    </>
  );
};

export default Ingredienser;